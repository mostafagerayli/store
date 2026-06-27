# 🥜 Pistachio Store

فروشگاه آنلاین پسته توسعه داده شده با **Next.js** و **PostgreSQL**.

این پروژه با هدف یادگیری و پیاده‌سازی مفاهیم **Full Stack Development** توسعه داده شده و شامل سیستم احراز هویت، مدیریت کاربران، مدیریت محصولات، سبد خرید و پنل مدیریت است.

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
* دریافت اطلاعات کاربر از طریق `/api/me`
* ذخیره JWT داخل **HttpOnly Cookie**
* محافظت از Routeها با Middleware

---

## 👤 User Management

* ذخیره اطلاعات کاربران در PostgreSQL
* ثبت‌نام با شماره تلفن
* مدیریت اطلاعات کاربران
* نمایش نام و نقش کاربر در رابط کاربری

---

## 📦 Product Management

* ایجاد محصول
* ویرایش محصول
* حذف محصول
* مشاهده لیست محصولات
* مدیریت موجودی کالا
* آپلود تصویر محصول
* ذخیره تصاویر در `/public/uploads`
* ذخیره مسیر تصویر در PostgreSQL
* نمایش تصاویر با `next/image`
* پشتیبانی از Fallback Image
* Pagination
* Search
* Sort

---

## 🛒 Shopping Cart

* افزودن محصول به سبد خرید
* حذف محصول از سبد خرید
* تغییر تعداد محصولات
* محاسبه مجموع سفارش
* مدیریت State با Redux Toolkit

---

## ⚙️ Admin Dashboard

* داشبورد مدیریت
* مدیریت محصولات
* ایجاد، ویرایش و حذف محصولات
* آپلود تصاویر
* مدیریت موجودی

---

## 🎨 UI & UX

* React Hook Form
* فرم‌های اعتبارسنجی شده
* Modal برای ویرایش و حذف
* React Toastify
* بروزرسانی خودکار رابط کاربری با `router.refresh`

---

## ⚠️ Error Handling

ساختار مدیریت خطاها به صورت لایه‌ای پیاده‌سازی شده است:

```
UI
 ↓
Service Layer
 ↓
fetchClient
 ↓
Server
```

### قابلیت‌ها

* Centralized Error Handling
* ApiError
* Fetch Client
* Toast Notifications
* try/catch در UI
* مدیریت یکپارچه خطاها

---

# 🧱 Tech Stack

## Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* Redux Toolkit
* React Hook Form
* React Toastify

## Backend

* Next.js
* Server Actions
* Prisma ORM
* PostgreSQL

## Security

* JWT
* bcrypt
* HttpOnly Cookies
* Middleware Authentication

---

# 🗄 Database Schema

## users

```sql
id
full_name
phone
password
role
created_at
```

## products

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
app/
components/
actions/
services/
lib/
hooks/
context/
prisma/
public/uploads/
```

---

# 🔥 Highlights

* Full CRUD محصولات
* Prisma ORM
* Server Actions
* Image Upload
* Authentication با JWT
* Refresh Token Flow
* Session Persistence
* Shopping Cart
* Admin Dashboard
* Centralized Error Handling
* Pagination
* Search & Sort

---

# 📈 Project Status

## ✅ Completed

* Authentication
* User Management
* Product CRUD
* Admin Dashboard
* Shopping Cart
* Image Upload
* Password Reset
* JWT Authentication
* Refresh Token Flow
* Session Persistence
* Prisma Migration
* Pagination
* Search
* Sort
* Centralized Error Handling

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
* Error Mapping
* Product Filtering
* Order History
* User Profile

---

# 🔒 Security

* رمز عبور کاربران با **bcrypt** هش می‌شود.
* احراز هویت با JWT انجام شده است.
* Access Token و Refresh Token به صورت مجزا مدیریت می‌شوند.
* اطلاعات حساس از طریق **HttpOnly Cookie** منتقل می‌شوند.
* Routeهای محافظت‌شده توسط Middleware کنترل می‌شوند.

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

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=
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

---

# 📝 Notes

این پروژه همچنان در حال توسعه است و به مرور قابلیت‌های جدیدی به آن اضافه خواهد شد. هدف اصلی پروژه، پیاده‌سازی یک فروشگاه آنلاین مدرن با معماری استاندارد Full Stack و استفاده از بهترین شیوه‌های توسعه در اکوسیستم Next.js است.
