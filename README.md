# 🥜 Pistachio Store

فروشگاه آنلاین پسته توسعه داده شده با **Next.js، PostgreSQL، Prisma و Supabase**.

این پروژه با هدف یادگیری و پیاده‌سازی معماری **Full Stack Development** توسعه داده شده و شامل سیستم احراز هویت، مدیریت کاربران، مدیریت محصولات، مدیریت بلاگ، سبد خرید و پنل مدیریت است.

---

# ✨ Features

## 🔐 Authentication & Authorization

* ثبت‌نام کاربران
* ورود کاربران
* خروج کاربران
* بازیابی رمز عبور
* رمزنگاری رمز عبور با **bcrypt**
* احراز هویت با **JWT**
* Access Token & Refresh Token
* نگهداری Session بعد از Refresh
* دریافت اطلاعات کاربر از طریق `/api/v1/me`
* ذخیره JWT داخل **HttpOnly Cookie**
* محافظت از Routeها با Middleware

---

# 👤 User Management

* ذخیره اطلاعات کاربران در PostgreSQL
* ثبت‌نام با شماره تلفن
* مدیریت Role کاربران
* نمایش اطلاعات کاربر در UI

---

# 📦 Product Management

* ایجاد محصول
* ویرایش محصول
* حذف محصول
* مشاهده لیست محصولات
* مدیریت موجودی کالا
* آپلود تصویر محصول
* ذخیره تصاویر در **Supabase Storage**
* ذخیره URL تصویر در PostgreSQL
* نمایش تصاویر با `next/image`
* Fallback Image
* Pagination
* Search
* Sort
* Server Side Data Fetching

---

# 📝 Blog Management

* ایجاد بلاگ
* ویرایش بلاگ
* حذف بلاگ
* نمایش لیست بلاگ‌ها
* نمایش جزئیات بلاگ
* دسته‌بندی بلاگ‌ها
* آپلود تصویر بلاگ
* ذخیره تصاویر در Supabase Storage
* Pagination
* مدیریت Slug برای صفحات SEO Friendly

---

# 🛒 Shopping Cart

* افزودن محصول به سبد خرید
* حذف محصول از سبد خرید
* تغییر تعداد محصولات
* محاسبه مجموع سفارش
* مدیریت State با Redux Toolkit

---

# ⚙️ Admin Dashboard

* داشبورد مدیریت
* مدیریت محصولات
* مدیریت بلاگ‌ها
* ایجاد، ویرایش و حذف محصولات
* ایجاد، ویرایش و حذف بلاگ‌ها
* مدیریت تصاویر
* مدیریت موجودی

---

# ✅ Backend Validation

اعتبارسنجی سمت Backend با استفاده از **Zod** پیاده‌سازی شده است.

قابلیت‌ها:

* Validation برای Authentication
* Validation برای Product CRUD
* Validation برای Blog CRUD
* جلوگیری از ورود داده نامعتبر به Database
* مدیریت خطاهای Validation

ساختار:

```
Request
   ↓
Zod Validation
   ↓
Service / Server Action
   ↓
Prisma
   ↓
Database
```

---

# 🔌 API Versioning

ساختار APIها به صورت Versioned پیاده‌سازی شده است:

```
/api/v1/login
/api/v1/register
/api/v1/logout
/api/v1/reset-password
/api/v1/forgot-password
/api/v1/me
```

مزایا:

* جلوگیری از Breaking Changes
* قابلیت توسعه نسخه‌های بعدی API
* معماری استاندارد Backend

---

# ⚠️ Error Handling

ساختار مدیریت خطاها به صورت لایه‌ای:

```
UI
 ↓
Server Actions
 ↓
API Layer
 ↓
Prisma
 ↓
Database
```

قابلیت‌ها:

* Centralized Error Handling
* ApiError
* Fetch Client
* Toast Notifications
* try/catch در Server Actions
* مدیریت یکپارچه خطاها

---

# 🗄 Database Schema

## users

```sql
id
name
phone
password
role
created_at
```

---

## products

```sql
id
name
description
price
weight
stock
image_url
slug
created_at
updated_at
```

---

## blogs

```sql
id
title
description
content
category
image
slug
created_at
updated_at
```

---

# 🪝 Custom Hooks

```text
useLogin
useLogout
useRegister
useResetPassword
```

---

# 📂 Project Structure

```text
src/
 ├── app/
 │    ├── api/
 │    │    └── v1/
 │    ├── actions/
 │    ├── components/
 │    ├── dashboard/
 │    └── lib/
 │
 ├── hooks/
 ├── validations/
 ├── types/
 ├── prisma/
 └── public/
```

---

# 🧱 Tech Stack

## Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Redux Toolkit
* React Hook Form
* React Toastify

---

## Backend

* Next.js Server Actions
* API Routes
* Prisma ORM
* PostgreSQL
* Supabase Storage

---

## Validation

* Zod

---

## Security

* JWT
* bcrypt
* HttpOnly Cookies
* Middleware Authentication

---

# 🔥 Highlights

* Full CRUD محصولات
* Full CRUD بلاگ
* Prisma ORM
* Supabase Storage
* Server Actions
* API Versioning
* Backend Validation
* JWT Authentication
* Refresh Token Flow
* Session Persistence
* Shopping Cart
* Admin Dashboard
* Centralized Error Handling
* Pagination
* Search
* Sort
* Next.js Cache Revalidation

---

# 📈 Project Status

## ✅ Completed

* Authentication
* User Management
* Product CRUD
* Blog CRUD
* Admin Dashboard
* Shopping Cart
* Image Upload
* Password Reset
* JWT Authentication
* Refresh Token Flow
* Session Persistence
* Prisma Migration
* API Versioning
* Backend Validation
* Pagination
* Search
* Sort
* Centralized Error Handling
* Supabase Storage Integration

---

## 🚧 In Progress

* Checkout Page
* Product Details Page
* Order Management
* Payment Integration

---

## 📌 Planned

* Role Based Access Control (RBAC)
* Global Loading System
* Auto Logout on 401
* Retry Failed Requests
* Product Filtering
* Order History
* User Profile
* Dashboard Analytics

---

# 🔒 Security

* رمز عبور کاربران با **bcrypt** هش می‌شود.
* احراز هویت با JWT انجام شده است.
* Access Token و Refresh Token جداگانه مدیریت می‌شوند.
* Tokenها داخل HttpOnly Cookie ذخیره می‌شوند.
* Routeهای محافظت‌شده توسط Middleware کنترل می‌شوند.
* تمام ورودی‌های مهم سمت Backend Validation می‌شوند.

---

# ⚙️ Installation

```bash
git clone <repository-url>

cd pistachio-store

npm install

npm run dev
```

---

# 🔑 Environment Variables

فایل `.env.local`

```env
DATABASE_URL=

DIRECT_URL=

ACCESS_SECRET=

REFRESH_SECRET=

RESET_PASSWORD_SECRET=

SUPABASE_URL=

SUPABASE_SERVICE_ROLE_KEY=
```

---

# 🚀 Future Improvements

* Payment Gateway
* Wishlist
* Product Reviews
* Order Tracking
* Email Verification
* Notifications
* Dashboard Analytics
* Redis Cache در صورت نیاز به Scale بالا

---

# 📝 Notes

این پروژه همچنان در حال توسعه است و به مرور قابلیت‌های جدیدی به آن اضافه خواهد شد.

هدف اصلی پروژه، پیاده‌سازی یک فروشگاه آنلاین مدرن با معماری استاندارد Full Stack و استفاده از بهترین روش‌های توسعه در اکوسیستم Next.js است.
