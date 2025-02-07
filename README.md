# DREAM NEST: Property Rental System

## Overview

DREAM NEST is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for seamless and dynamic rental property management. This project showcases a robust backend API, an interactive frontend, secure user authentication, and efficient data handling.

## Key Features

- **Full-Stack MERN Application**: Utilizes MongoDB, Express.js, React.js, and Node.js for a complete web solution.
- **RESTful API**: Secure and efficient data handling through well-designed API endpoints.
- **Responsive React Frontend**: User-friendly interface for browsing, booking, and managing rental properties.
- **MongoDB with Mongoose**: Efficient data modeling and management for properties, reservations, and user profiles.
- **JWT Authentication**: Secure user authentication and authorization system.
- **Docker Containerization**: Separate containers for frontend and backend, ensuring consistent environments.
- **CI Pipeline**: Automated testing and deployment processes integrated with GitHub Actions.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Docker and Docker Compose

### Installation and Setup

1. Clone the repository:
git clone https://github.com/AshFire1/DockerisedCiHomeRental.git
cd DockerisedCiHomeRental
2. Install dependencies:
cd backend && npm install
cd ../frontend && npm install
3. Set up environment variables:
- Create `.env` files in both `backend` and `frontend` directories.
- Add necessary environment variables (database URL, JWT secret, etc.)

4. Run the application using Docker:
 docker-compose up --build

5. Access the application:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline:

- Builds Frontend to check if any errors come while building and runs backend service and checks api healthpoint
- Builds Docker images





