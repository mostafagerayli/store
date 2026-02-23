import { pool } from '@/app/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const { name, phone, password } = await req.json();
    if (!name || !phone || !password) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 });
    }

    // چک شماره موبایل
    const check = await pool.query('SELECT * FROM users WHERE phone=$1', [phone]);
    if (check.rows.length > 0) {
      return new Response(JSON.stringify({ error: 'Phone already registered' }), { status: 400 });
    }

    // Hash کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ثبت کاربر
    const result = await pool.query(
      'INSERT INTO users (name, phone, password) VALUES ($1, $2, $3) RETURNING id, name, phone',
      [name, phone, hashedPassword]
    );

    // ساخت JWT
    const token = jwt.sign({ id: result.rows[0].id }, 'supersecretkey', { expiresIn: '1h' });

    return new Response(JSON.stringify({ user: result.rows[0], token }), { status: 201 });
  } catch (err) {
    console.error('Register error:', err.message);
    return new Response(JSON.stringify({ error: 'Database error', details: err.message }), { status: 500 });
  }
}