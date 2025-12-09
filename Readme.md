# JWT Authentication & Authorization API

This project implements secure **user authentication and authorization** using **JWT Bearer Tokens** with **Node.js, Express, MongoDB, and Mongoose**, following the **MVC architecture**.

---

## ✨ Features

* User Registration with hashed passwords (bcrypt)
* User Login with JWT token generation
* Protected routes using Bearer token authentication
* Role-based access control (Admin & User)
* Admin-only route to fetch all users
* Route to fetch currently logged-in user info from token
* MVC structured codebase

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv
* Postman (for API testing)

---

## 📁 Project Structure

```
Database/
  └── dbConfig.js
Model/
  └── userSchema.js
Controller/
  └── userController.js
Middleware/
  ├── authMiddleware.js
  └── adminMiddleware.js
Router/
  └── userRouter.js
server.js / index.js
.env
```

---

## 🔐 Environment Variables (.env)

```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
SECERT_KEY=your_jwt_secret_key
```

---

## ▶️ How to Run the Project

```bash
npm install
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### ✅ Register User

**POST** `/api/auth/register`

**Request Body:**

```json
{
  "username": "test",
  "email": "test@gmail.com",
  "password": "12345678"
}
```

---

### ✅ Login User

**POST** `/api/auth/login`

**Request Body:**

```json
{
  "email": "test@gmail.com",
  "password": "12345678"
}
```

**Response:**

```json
{
  "message": "user logged in successfully",
  "token": "<JWT_TOKEN>"
}
```

---

### ✅ Get Logged-in User Info

**GET** `/api/auth/me`

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

---

### ✅ Admin Access – Get All Users

**GET** `/api/auth/getdata`

**Headers:**

```
Authorization: Bearer <ADMIN_JWT_TOKEN>
```

---

## 🧪 Postman

This project includes full Postman documentation with:

* Sample requests
* Sample responses
* Token-based authentication testing
* Admin route testing

**Postman Collection:**
[https://documenter.getpostman.com/view/44991925/2sB3dQvpkZ](https://documenter.getpostman.com/view/44991925/2sB3dQvpkZ)



---

## ✅ Task Completion Status

* ✔ User Registration
* ✔ Password Hashing
* ✔ JWT Login
* ✔ Token Verification Middleware
* ✔ Admin Authorization
* ✔ Get Current User from Token
* ✔ MVC Architecture
* ✔ Postman Documentation

---


## 👨‍💻 Author

Developed by: *Rahin Mon S*
