# Task Management App

Fullstack application for task management using React, Vite, Node.js, Express, and Prisma with PostgreSQL.

## Prerequisites
- Node.js (v18+)
- PostgreSQL

## Setup
1. Copy `.env.example` to `.env` in root and backend folders and fill the database URL.
2. Install dependencies:
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Run migrations:
   ```bash
   cd backend
   npx prisma migrate dev
   ```
4. Start the application:
   ```bash
   # Start Backend
   cd backend && npm run dev
   # Start Frontend (in new terminal)
   cd frontend && npm run dev
   ```