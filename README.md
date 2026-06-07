# 🥜 Pistachio Store

فروشگاه آنلاین پسته توسعه داده شده با Next.js و PostgreSQL.

این پروژه با هدف یادگیری و پیاده‌سازی مفاهیم Full Stack شامل احراز هویت، مدیریت کاربران، مدیریت محصولات، سبد خرید و پنل مدیریت توسعه داده شده است.

---

## 🚀 قابلیت‌های پیاده‌سازی شده

### Authentication & Authorization

* ثبت نام کاربران
* ورود کاربران
* خروج کاربران
* بازیابی رمز عبور
* هش کردن رمز عبور با bcrypt
* JWT Authentication
* Access Token
* Refresh Token
* محافظت از Route ها
* Middleware Authentication

### User Management

* ذخیره اطلاعات کاربران در PostgreSQL
* ثبت نام با شماره تلفن
* مدیریت اطلاعات کاربران

### Product Management

* افزودن محصول
* ویرایش محصول
* حذف محصول
* نمایش لیست محصولات
* مدیریت موجودی کالا
* آپلود تصویر محصول

### Shopping Cart

* افزودن محصول به سبد خرید
* حذف محصول از سبد خرید
* تغییر تعداد محصولات
* محاسبه مجموع سفارش
* مدیریت State با Redux Toolkit

### Admin Dashboard

* پنل مدیریت
* مدیریت محصولات
* ویرایش اطلاعات محصولات
* حذف محصولات
* آپلود تصاویر

---

## 🛠 تکنولوژی‌های استفاده شده

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* Redux Toolkit
* React Hook Form

### Backend

* Next.js Route Handlers
* PostgreSQL

### Security

* JWT
* bcrypt
* Access Token
* Refresh Token
* Middleware

---

## 📂 ساختار دیتابیس

### users

```sql
id
full_name
phone
password
created_at
```

### products

```sql
id
name
description
price
stock
image_url
created_at
```

---

## 🪝 Custom Hooks

```text
useLogin
useLogout
useRegister
useResetPassword
```

---

## 🌐 API Routes

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/reset-password
POST /api/auth/refresh
```

### Products

```http
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

## 📌 وضعیت فعلی پروژه

### Completed

* Authentication System
* User Management
* Product Management
* Shopping Cart
* Redux Toolkit
* Image Upload
* Admin Dashboard
* Password Reset
* JWT Authentication
* Access & Refresh Token Flow

### In Progress

* Checkout Page
* Product Details Page
* Order Management
* Payment Integration

### Planned

* Toast Notifications
* Axios Interceptors
* Centralized Error Handling
* Search Products
* Product Filtering
* Pagination
* Role Based Access Control (RBAC)

---

## 🔒 نکات امنیتی

* رمز عبور کاربران به صورت هش شده ذخیره می‌شود.
* احراز هویت با JWT انجام شده است.
* Access Token و Refresh Token به صورت مجزا مدیریت می‌شوند.
* مسیرهای محافظت شده توسط Middleware کنترل می‌شوند.

---

## ⚙️ راه‌اندازی پروژه

```bash
npm install
npm run dev
```

فایل `.env.local`:

```env
DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=
```

---

## 📝 یادداشت

این پروژه همچنان در حال توسعه است و امکانات جدید به مرور به آن اضافه خواهد شد.
