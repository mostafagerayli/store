# 🥜 Pistachio Store

فروشگاه آنلاین پسته توسعه داده شده با Next.js و PostgreSQL.

این پروژه با هدف یادگیری و پیاده‌سازی مفاهیم Full Stack شامل احراز هویت، مدیریت کاربران، مدیریت محصولات، سبد خرید و پنل مدیریت توسعه داده شده است.

---

## 🚀 قابلیت‌های پیاده‌سازی شده
## 🚀 قابلیت‌ها

- ایجاد، ویرایش و حذف محصولات (CRUD کامل)
- استفاده از Server Actions به جای API Routes
- آپلود تصویر محصول و ذخیره آن در `/public/uploads`
- ذخیره مسیر تصویر در دیتابیس PostgreSQL
- نمایش لیست محصولات در داشبورد
- نمایش تصویر با `next/image` و fallback در صورت نبود تصویر
- استفاده از react-hook-form برای مدیریت فرم‌ها و validation
- نمایش پیام‌های موفقیت و خطا با react-toastify
- استفاده از modal برای ویرایش و حذف محصولات
- بروزرسانی خودکار UI بعد از تغییرات با `router.refresh`

---

## 🧱 تکنولوژی‌ها

- Next.js (App Router)
- React
- Server Actions
- PostgreSQL (pg)
- React Hook Form
- React Toastify
- Next Image
### Authentication & Authorization

- ثبت نام کاربران
- ورود کاربران
- خروج کاربران
- بازیابی رمز عبور
- هش کردن رمز عبور با bcrypt
- JWT Authentication
- Access Token
- Refresh Token
- محافظت از Route ها
- Middleware Authentication

### User Management

- ذخیره اطلاعات کاربران در PostgreSQL
- ثبت نام با شماره تلفن
- مدیریت اطلاعات کاربران

### Product Management

- افزودن محصول
- ویرایش محصول
- حذف محصول
- نمایش لیست محصولات
- مدیریت موجودی کالا
- آپلود تصویر محصول
🎯 بهبود سیستم اعلان‌ها و مدیریت خطاها (Toast + Error Handling)

در این مرحله از پروژه، سیستم اعلان‌ها و مدیریت خطاها به صورت استاندارد و حرفه‌ای بازطراحی شد.

---



## ✨ تغییرات انجام شده

### 🔔 سیستم Toast
- جایگزینی Toast سفارشی با react-toastify
- اضافه شدن ToastContainer به صورت global
- ساده‌سازی ساختار ToastProvider
- حذف Context غیرضروری و کاهش پیچیدگی

---

### ⚠️ سیستم مدیریت خطا (Error Handling)

- ایجاد fetchClient برای مدیریت مرکزی درخواست‌های API
- استفاده از ApiError برای استانداردسازی خطاها
- یکپارچه‌سازی مدیریت خطا در تمام سرویس‌ها
- refactor کردن سرویس‌های auth (login / register / logout)
- استفاده از try/catch در UI برای نمایش خطا با Toast

---

## 🧠 معماری جدید پروژه


UI (try/catch + toast)
↓
Service Layer
↓
fetchClient
↓
API


---

## 🚀 نتیجه نهایی

- کد تمیزتر و قابل نگهداری‌تر شده
- مدیریت خطاها استاندارد و یکپارچه شده
- تجربه کاربری (UX) با Toast بهبود یافته
- ساختار پروژه آماده توسعه‌های بزرگ‌تر شده

اگر بخوای قدم بعدی رو بریم، می‌تونیم پروژه‌تو برسونیم به سطح بالاتر:

🔥 
error mapping (مثلاً phone error مستقیم زیر input بیاد)
🔥 
auto logout روی 401
🔥 
loading global system
🔥 
retry failed requests


### Shopping Cart

- افزودن محصول به سبد خرید
- حذف محصول از سبد خرید
- تغییر تعداد محصولات
- محاسبه مجموع سفارش
- مدیریت State با Redux Toolkit

### Admin Dashboard

- پنل مدیریت
- مدیریت محصولات
- ویرایش اطلاعات محصولات
- حذف محصولات
- آپلود تصاویر

---

## 🛠 تکنولوژی‌های استفاده شده

### Frontend

- Next.js (App Router)
- React
- Tailwind CSS
- Redux Toolkit
- React Hook Form

### Backend

- Next.js Route Handlers
- PostgreSQL

### Security

- JWT
- bcrypt
- Access Token
- Refresh Token
- Middleware

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

- Authentication System
- User Management
- Product Management
- Shopping Cart
- Redux Toolkit
- Image Upload
- Admin Dashboard
- Password Reset
- JWT Authentication
- Access & Refresh Token Flow
  *Session Persistence بعد از Refresh
  *نمایش نام و نقش کاربر در UI بدون از دست رفتن state
  \*بازیابی اطلاعات کاربر بعد از Refresh (Persist Session)
  👤 User Session Management (جدید)
  ذخیره JWT داخل HttpOnly Cookie
  دریافت اطلاعات کاربر بعد از Refresh از طریق /api/me
  نگهداری state کاربر در AuthContext
  جلوگیری از logout شدن کاربر بعد از refresh
  نمایش نام و نقش کاربر در UI (Header / Profile Menu)

### In Progress

- Checkout Page
- Product Details Page
- Order Management
- Payment Integration

### Planned

- Toast Notifications
- Axios Interceptors
- Centralized Error Handling
- Search Products
- Product Filtering
- Pagination
- Role Based Access Control (RBAC)

---

## 🔒 نکات امنیتی

- رمز عبور کاربران به صورت هش شده ذخیره می‌شود.
- احراز هویت با JWT انجام شده است.
- Access Token و Refresh Token به صورت مجزا مدیریت می‌شوند.
- مسیرهای محافظت شده توسط Middleware کنترل می‌شوند.
  \*اطلاعات حساس فقط از طریق HttpOnly Cookie منتقل می‌شوند

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
