# Book Search Engine App

Welcome to the Book Search Engine App, a full-stack web application that allows users to search for books, save their favorite books, and view their saved book list. This README will guide you through the installation, usage, deployment, and contribution process for this project.

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- GraphQL
- Apollo Server
- Apollo Client
- React Router
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing

## Installation
To run the Book Search Engine on your local machine, you need to have Node.js and MongoDB installed. Follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/book-search-engine.git
    ```

2. Change into the project directory:
    ```bash
    cd book-search-engine
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret key:
    ```makefile
    MONGODB_URI=your-mongodb-connection-string
    SECRET_KEY=your-secret-key-for-jwt
    ```

## Usage
To start the development server, run the following command:

```bash
npm start
```

The application will be available at http://localhost:3000.

## Deployment
The application can be deployed to Heroku using the following steps:

1. Create a new Heroku app and configure the environment variables for MongoDB connection and JWT secret key.

2. Push the code to the Heroku app's repository:
    ```bash
    git push heroku main
    ```

Heroku will automatically build and deploy the application.

## Contributing
Contributions to the Book Search Engine project are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.

## License
This project is licensed under the [MIT License](./LICENSE) - see the [LICENSE](./LICENSE) file for details.


## Contact
If you have any questions or want to collaborate on this project, you can reach me at [your-email@example.com](mailto:your-email@example.com).

## Deploy
- **GitHub Repository:** [https://github.com/nhunguyen-debug/21-MERN-Project.git](https://github.com/nhunguyen-debug/21-MERN-Project.git)
- **Heroku Deployment:** [https://mernapps-booksearchengine-b1e0c2bed1d1.herokuapp.com/](https://mernapps-booksearchengine-b1e0c2bed1d1.herokuapp.com/)

![Demo](./02-Challenge/Assets/21-mern-homework-demo-01.gif)
![Demo](./02-Challenge/Assets/21-mern-homework-demo-02.gif)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
