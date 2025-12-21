📝 Full-Stack Todo Application (MERN + TypeScript)

A full-stack Todo application built with React, TypeScript, Express, MongoDB, and JWT authentication.
Users can register, log in, and manage their personal todo list securely.

🔗 GitHub Repository:
https://github.com/michael-lfc/Todo-App-Updated

🚀 Features:

User authentication (Register & Login)

JWT-protected routes

Create, read, update, and delete todos

User-specific todos

Context-based authentication (React Context API)

Light/Dark theme support

Fully written in TypeScript

Clean and scalable project structure

🛠 Tech Stack:
Frontend:

React 19

TypeScript

Vite

Axios

React Router DOM

Context API

CSS (modular styles)

Backend:

Node.js

Express 5

TypeScript

MongoDB + Mongoose

JWT Authentication

bcryptjs

dotenv

📁 Project Structure
Todo-App-Updated/
├── client/        # React frontend
└── server/        # Express backend

📂 Backend Folder Structure
backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   └── db.ts
│   ├── models/
│   │   ├── User.ts
│   │   └── Todo.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── todoController.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── todoRoutes.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   └── types/
│       └── auth.ts
├── package.json
├── tsconfig.json
├── .env
└── .gitignore

📂 Frontend Folder Structure
client/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── authApi.ts
│   │   └── todoApi.ts
│   ├── components/
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Dashboard.tsx
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts

🔐 Authentication Flow:

User registers or logs in

Backend generates a JWT

Token is sent to the frontend

Token is stored in context

Token is attached to requests as:

Authorization: Bearer <token>


Protected routes validate the token using middleware

📡 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Todo Routes (Protected)
Method	Endpoint	Description
GET	/api/todos	Get all todos
GET	/api/todos/:id	Get single todo
POST	/api/todos	Create todo
PUT	/api/todos/:id	Update todo
DELETE	/api/todos/:id	Delete todo
⚙️ Environment Variables

Create a .env file in the server folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tododb
JWT_SECRET=your_jwt_secret


Create a .env file in the client folder:

VITE_API_URL=http://localhost:5000

▶️ Running the Project Locally
1️⃣ Start Backend
cd server
npm install
npm run dev


Backend runs on:

http://localhost:5000

2️⃣ Start Frontend
cd client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 Testing Protected Routes

Login to get a token

Token is automatically attached to requests via Axios

Unauthorized users cannot access todo routes

🔮 Future Improvements:

Password reset

Email verification

Pagination

Todo categories

Refresh token support

👨‍💻 Author

Michael Agwogie
Full Stack Developer (MERN + TypeScript)
