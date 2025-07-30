# Simple User API (MongoDB & Express.js)

This is a minimalist backend API built with Node.js and Express.js, using Mongoose to interact with a MongoDB database. It provides basic CRUD (Create, Read, Update, Delete) operations for managing user data.

## Project Overview

This project demonstrates the fundamental concepts of building a RESTful API:

- **Node.js:** The JavaScript runtime environment.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model your application data.
- **MongoDB:** A NoSQL, document-oriented database.

The API exposes endpoints to perform operations on a `User` resource, including creating new users, retrieving existing ones (individually or all), updating user details, and deleting users.

## Features

- **Create User:** Add new user records to the database.
- **Get All Users:** Retrieve a list of all users stored in the database.
- **Get User by ID:** Fetch a specific user's details using their unique ID.
- **Update User:** Modify an existing user's information.
- **Delete User:** Remove a user record from the database.
- **Error Handling:** Basic `try-catch` blocks for server-side errors (HTTP 500).

## Tech Stack

- **Backend:** Node.js
- **Web Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-project-folder-name>
    ```

2.  **Install Node.js and npm:**
    If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/). npm (Node Package Manager) is installed automatically with Node.js.

3.  **Install MongoDB:**
    Download and install MongoDB Community Server from the [MongoDB Download Center](https://www.mongodb.com/try/download/community). Ensure you start the MongoDB server (`mongod` process) before running this application.

4.  **Install Dependencies:**
    Navigate to the project directory in your terminal and install the required Node.js packages:

    ```bash
    npm install express mongoose
    ```

    _(Optional: If you plan to use `nodemon` for automatic server restarts during development, also install it: `npm install -D nodemon`)_

5.  **Run the Server:**
    ```bash
    node index.js
    ```
    If you installed `nodemon`, you can run:
    ```bash
    nodemon index.js
    ```
    The server will start and listen on port `3000`. You should see the message `Server is running on port 3000` in your terminal.

## API Endpoints

The API base URL is `http://localhost:3000`.

| Method   | Endpoint     | Description                   | Request Body Example (for POST/PUT)                                                                | Response                                                                        |
| :------- | :----------- | :---------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `GET`    | `/`          | Welcome message               | `N/A`                                                                                              | `Welcome to the User API!` (HTML string)                                        |
| `POST`   | `/users`     | Creates a new user            | `json<br>{<br>  "name": "John Doe",<br>  "age": 30,<br>  "email": "john.doe@example.com"<br>}<br>` | `200 OK` with the created user object (including `_id`)                         |
| `GET`    | `/users`     | Retrieves all users           | `N/A`                                                                                              | `200 OK` with an array of user objects                                          |
| `GET`    | `/users/:id` | Retrieves a single user by ID | `N/A`                                                                                              | `200 OK` with the user object, or `404 Not Found`                               |
| `PUT`    | `/users/:id` | Updates a user by ID          | `json<br>{<br>  "name": "Jane Doe",<br>  "age": 31<br>}<br>`                                       | `200 OK` with the updated user object, or `404 Not Found`                       |
| `DELETE` | `/users/:id` | Deletes a user by ID          | `N/A`                                                                                              | `200 OK` with `{ "message": "User deleted successfully!" }`, or `404 Not Found` |

---

## How to Test the API

You can use tools like **Postman**, **Insomnia**, `curl`, or even your web browser to test these endpoints.

### Example `curl` Commands:

1.  **Get Welcome Message:**

    ```bash
    curl http://localhost:3000/
    ```

2.  **Create a User (POST):**

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice Wonderland","age":28,"email":"alice@example.com"}' http://localhost:3000/users
    ```

3.  **Get All Users (GET):**

    ```bash
    curl http://localhost:3000/users
    ```

4.  **Get a User by ID (GET):**
    (Replace `<USER_ID>` with an actual ID from your database)

    ```bash
    curl http://localhost:3000/users/<USER_ID>
    ```

5.  **Update a User (PUT):**
    (Replace `<USER_ID>` with an actual ID)

    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"age":29}' http://localhost:3000/users/<USER_ID>
    ```

6.  **Delete a User (DELETE):**
    (Replace `<USER_ID>` with an actual ID)
    ```bash
    curl -X DELETE http://localhost:3000/users/<USER_ID>
    ```

---

## Future Improvements (Potential Enhancements)

- **Environment Variables:** Externalize sensitive information (like MongoDB URI and PORT) into a `.env` file using the `dotenv` package.
- **Input Validation:** Implement more robust request body validation (e.g., ensuring `email` is a valid format, `name` is not empty) using Mongoose schema options or dedicated validation libraries like `express-validator`.
- **Error Handling:** Implement more specific and user-friendly error messages, differentiating between validation errors (400 Bad Request), authentication errors (401 Unauthorized), forbidden access (403 Forbidden), etc.
- **Modular Routes:** Separate routes into different files (`routes/users.js`) and models (`models/User.js`) for better organization in larger projects.
- **Authentication/Authorization:** Add user authentication (e.g., JWT) and role-based authorization for real-world scenarios.
- **Testing:** Add unit and integration tests for API endpoints.
- **API Documentation:** Use tools like Swagger/OpenAPI to automatically generate API documentation.
