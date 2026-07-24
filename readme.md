
# VidTube Backend API

A scalable RESTful backend for a YouTube-inspired video sharing platform built with **Node.js**, **Express.js**, and **MongoDB**. The application provides secure user authentication, video management, subscriptions, playlists, comments, likes, watch history, dashboard analytics, and cloud-based media storage.

---

## About the Project

This project was developed while following **Hitesh Choudhary's Full Stack Web Development** course on Udemy.

The course provided the overall project architecture and partially implemented starter code for a few modules as learning assignments. I completed those assignment sections independently, implemented the missing functionality, debugged the application, integrated all modules, and manually tested every API endpoint using Postman to ensure the backend worked correctly from end to end.

This project helped me understand how production-style backend applications are structured and how different components communicate with each other.

---

# Features

### Authentication & Authorization
- User Registration
- User Login
- Secure JWT Authentication
- Access Token & Refresh Token Flow
- Password Hashing using bcrypt
- Change Password
- Forgot Password & Reset Password
- Logout
- Current User API

---

### User Management
- Update Profile Information
- Update Avatar
- Update Cover Image
- View User Channel Profile
- Watch History

---

### Video Management
- Upload Videos
- Update Video Details
- Delete Videos
- Publish / Unpublish Videos
- Fetch Individual Video
- Fetch All Videos
- Cloudinary Integration for Media Storage

---

### Comments
- Add Comment
- Edit Comment
- Delete Comment
- Fetch Video Comments

---

### Likes
- Like / Unlike Videos
- Like / Unlike Comments
- Like / Unlike Tweets
- Get Liked Videos

---

### Playlists
- Create Playlist
- Update Playlist
- Delete Playlist
- Add Video to Playlist
- Remove Video from Playlist
- View Playlist Details

---

### Subscriptions
- Subscribe to Channels
- Unsubscribe from Channels
- Get Subscriber List
- Get Subscribed Channels

---

### Tweets
- Create Tweet
- Update Tweet
- Delete Tweet
- Fetch User Tweets

---

### Dashboard
- Channel Statistics
- Total Views
- Subscribers
- Videos
- Likes
- Dashboard Aggregation APIs

---

### Health Check

Simple API endpoint to verify that the server is running correctly.

---

#  Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password Security | bcrypt |
| File Upload | Multer |
| Cloud Storage | Cloudinary |
| Environment Variables | dotenv |
| Development | Nodemon |
| Code Formatting | Prettier |
| API Testing | Postman |

---

#  Project Structure

```text
src
│
├── controllers
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── video.controller.js
│   ├── comment.controller.js
│   ├── like.controller.js
│   ├── playlist.controller.js
│   ├── subscription.controller.js
│   ├── tweet.controller.js
│   ├── dashboard.controller.js
│   └── healthcheck.controller.js
│
├── middlewares
│   ├── auth.middleware.js
│   └── multer.middleware.js
│
├── models
│
├── routes
│
├── utils
│
├── db
│
├── app.js
├── constants.js
└── index.js
```

The project follows a clean MVC architecture to keep the codebase modular, scalable, and easy to maintain.

---

#  Installation

## 1. Clone the repository

```bash
git clone https://github.com/Raghavendra180/vidtube-backend.git

cd vidtube-backend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=8000

MONGODB_URI=

CORS_ORIGIN=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 4. Start Development Server

```bash
npm run dev
```

Server runs on

```
http://localhost:8000
```

---

#  API Testing

Every API endpoint was manually tested using **Postman** to verify authentication flows, CRUD operations, authorization, validation, and error handling.

If you include a Postman collection in the repository, users can quickly import it and test the entire API.

---

#  Main API Modules

```
Authentication

Users

Videos

Comments

Likes

Playlists

Subscriptions

Tweets

Dashboard

Health Check
```

---

#  What I Learned

Working on this project gave me practical experience with:

- Building RESTful APIs using Express.js
- JWT Authentication and Refresh Token workflow
- Authentication & Authorization middleware
- MongoDB Schema Design
- Mongoose Aggregation Pipelines
- File Uploads with Multer
- Cloudinary Integration
- Cookie-based Authentication
- Error Handling
- Async Programming
- MVC Architecture
- Writing reusable middleware
- Backend project organization
- Debugging complex backend issues
- API testing using Postman

---

#  Future Improvements

- Swagger / OpenAPI Documentation
- Docker Support
- Unit Testing
- Integration Testing
- GitHub Actions CI/CD
- Redis Caching
- Rate Limiting
- API Versioning

---

# Acknowledgements

This project was developed while following **Hitesh Choudhary's Full Stack Web Development** course on Udemy.

The course provided the learning roadmap, project architecture, and starter implementation for educational purposes. I completed the remaining assignment modules, integrated the application, resolved implementation issues, and tested the complete backend independently to strengthen my understanding of backend development.

---

# License

This project is intended for educational and learning purposes.
````
