import { pool } from '@/app/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const { phone, password } = await req.json();
    if (!phone || !password) {
      return new Response(JSON.stringify({ error: 'Phone and password required' }), { status: 400 });
    }

    const result = await pool.query('SELECT * FROM users WHERE phone=$1', [phone]);
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 401 });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return new Response(JSON.stringify({ error: 'Incorrect password' }), { status: 401 });
    }

    const token = jwt.sign({ id: user.id, name: user.name, phone: user.phone }, 'supersecretkey', { expiresIn: '1h' });

    return new Response(JSON.stringify({ user: { id: user.id, name: user.name, phone: user.phone }, token }), { status: 200 });
  } catch (err) {
    console.error('Login error:', err.message);
    return new Response(JSON.stringify({ error: 'Database error', details: err.message }), { status: 500 });
  }
}