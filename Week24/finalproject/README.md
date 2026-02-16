# 🗳️ PollMaster

A secure, full-stack polling application that allows authenticating users to create, share, and vote on polls in real-time. This project demonstrates modern security protocols (JWT token), relational database management, and seamless state synchronization.

## 🌟 Technical Spotlight: The "Silent Refresh" System
The hallmark of this project is a professional-grade authentication architecture designed to balance security with a frictionless user experience:

* **Dual-Token Strategy:** Leverages short-lived JWT Access Tokens for authorization and long-lived Refresh Tokens for session persistence.
* **Hardened Security:** Refresh tokens are stored in `HttpOnly`, `Secure`, and `SameSite=none` cookies. This ensures they are inaccessible to client-side scripts, providing a robust defense against XSS and token-theft attacks.
* **Intelligent Interceptors:** Custom Axios interceptors detect `401 Unauthorized` responses in real-time. They perform a background "silent refresh" and retry the original request, ensuring the user remains authenticated without page interruptions.



## 🛠️ Tech Stack

### Frontend
* **React & TypeScript:** Type-safe, component-based UI development.
* **Axios:** Automated token management and API communication.
* **React Router:** Implementation of Protected Routes and navigation logic.

### Backend
* **Node.js & Express:** Scalable RESTful API architecture.
* **PostgreSQL:** Relational data storage with strict integrity via foreign keys.
* **JWT & Cookie-Parser:** Secure identity and session management.

## 📊 Database Schema
The relational model is optimized for data consistency, ensuring poll ownership and a "one-vote-per-user" policy.



* **Users:** Secure credential storage.
* **Polls:** Associated with creators via User IDs.
* **Votes:** Unique constraints to prevent duplicate voting and maintain result accuracy.

## 🌐 Deployment & Proxy Logic
Deployed on **Render**, the system is configured with `trust proxy` and specialized CORS settings to allow secure cross-site cookie transmission between the frontend and backend subdomains.