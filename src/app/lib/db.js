import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',           // یوزر PostgreSQL لوکال
  host: 'localhost',
  database: 'online_shop',    // اسم دیتابیس لوکال
  password: '123456',         // پسورد لوکال
  port: 5432,
});