### 21 MERN: Book Search Engine
## Book Search Engine
```
Table of Contents
Description
User Story
Acceptance Criteria
Mock-Up
Technologies Used
Installation
Usage
Deployment
Contributing
License
Contact
```
## Description
The Book Search Engine is a web application that allows users to search for new books to read using the Google Books API. It is built using the MERN (MongoDB, Express.js, React, Node.js) stack and utilizes GraphQL for querying and mutating data.

## The main features of the Book Search Engine include:

User authentication: Users can sign up and log in to the application using their email and password.
Book Search: Users can search for books by entering keywords in the search bar.
Search Results: When a user performs a search, the application presents search results with book information, including the title, author, description, image, and a link to the Google Books page for the book.
Book Saving: Logged-in users can save books to their account by clicking the "Save This Book" button in the search results.
Saved Books: Users can view all the books they have saved in their account on a separate page.
Book Removal: Users can remove books from their saved list by clicking the "Remove" button on a saved book.
## User Story
md

AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
Acceptance Criteria
The Book Search Engine should meet the following acceptance criteria:

md
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 
``` 
## Mock-Up
The following animations demonstrate the functionality of the Book Search Engine:

Search for Books

Save Book

View Saved Books

Technologies Used
MongoDB
Express.js
React
Node.js
GraphQL
Apollo Server
Apollo Client
React Router
JSON Web Token (JWT) for authentication
bcrypt for password hashing
## Installation
To run the Book Search Engine on your local machine, you need to have Node.js and MongoDB installed. Follow these steps:

## Clone the repository:
bash

git clone https://github.com/your-username/book-search-engine.git
Change into the project directory:
bash

cd book-search-engine
Install the dependencies:
bash

npm install
Create a .env file in the root directory and add your MongoDB connection string and JWT secret key:
makefile

MONGODB_URI=your-mongodb-connection-string
SECRET_KEY=your-secret-key-for-jwt
##  Usage
To start the development server, run the following command:

bash

npm start
The application will be available at http://localhost:3000.

## Deployment
The application can be deployed to Heroku using the following steps:

Create a new Heroku app and configure the environment variables for MongoDB connection and JWT secret key.

Push the code to the Heroku app's repository:

bash

git push heroku main
Heroku will automatically build and deploy the application.
## Contributing
Contributions to the Book Search Engine project are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or want to collaborate on this project, you can reach me at your-email@example.com.
![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./Assets/21-mern-homework-demo-01.gif)<br>
![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./Assets/21-mern-homework-demo-02.gif)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.