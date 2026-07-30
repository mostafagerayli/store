# 🥜 Pistachio Store

Full Stack Online Pistachio Store built with **Next.js, TypeScript, PostgreSQL, Prisma and Supabase**.

This project focuses on building a scalable e-commerce system with modern Next.js architecture, secure authentication, backend business logic and admin management.

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Access & Refresh Token
- HttpOnly Cookies
- Password Hashing with bcrypt
- Protected Routes
- Role Management

---

## 📦 Product & Blog Management

- Product CRUD
- Blog CRUD
- Image Upload with Supabase Storage
- Inventory Management
- Pagination
- Search & Sort
- SEO Friendly Slugs

---

## 🛒 Shopping Cart & Orders

- Shopping Cart with Redux Toolkit
- Server Side Price Calculation
- Weight-based Product Pricing
- Shipping Cost Calculation
- Packaging Cost Calculation
- Dynamic Store Settings from Database
- Order Management Structure

> All sensitive calculations are handled on the Backend to prevent client-side manipulation.

---

## ✅ Validation & Error Handling

- Zod Schema Validation
- React Hook Form Integration
- Backend Validation
- Centralized Error Handling
- API Error Management

Flow:

```
React Hook Form
        ↓
Zod Validation
        ↓
API Route
        ↓
Service Layer
        ↓
Prisma
        ↓
Database
```

---

# 📂 Project Structure

```
src/

├── app/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── provider/
│   ├── lib/
│   └── utils/

├── types/
├── validations/
└── proxy.ts
```

---

# 🧱 Tech Stack

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Hook Form

### Backend

- Next.js API Routes
- Service Layer Architecture
- Prisma ORM
- PostgreSQL
- Supabase Storage

### Validation & Security

- Zod
- JWT
- bcrypt
- HttpOnly Cookies

---

# 🔥 Highlights

- Full Stack E-commerce Architecture
- Secure Authentication System
- Prisma ORM Integration
- Server Side Business Logic
- Dynamic Pricing System
- Admin Dashboard
- Database Driven Settings
- Image Management
- SEO Friendly Pages

---

# 🚧 Project Status

Completed:
- Authentication
- Product Management
- Blog Management
- Admin Dashboard
- Shopping Cart
- Backend Validation
- Price Calculation System

In Progress:
- Checkout System
- Order Management
- ZarinPal Payment Integration

---

# 🚀 Future Improvements

- RBAC
- Wishlist
- Product Reviews
- Order Tracking
- Analytics Dashboard