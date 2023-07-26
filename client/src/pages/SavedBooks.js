import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  // Execute the me query to get the user data, including saved books
  const { loading, error, data: userData } = useQuery(GET_ME); 
  const [deleteBook] = useMutation(REMOVE_BOOK);

  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return;
    }

    try {
      const { data } = await deleteBook({
        variables: { bookId },
      });

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error('Error fetching user data:', error);
    return <h2>Error occurred while fetching user data.</h2>;
  }

  // If data exists, destructure the user object and savedBooks array from it
  const { me } = userData; // Use userData instead of data

  return (
    <>
      {/* Your JSX to display the user data and saved books */}
      {me && (
        <div>
          <h2>User Information</h2>
          <p>User ID: {me._id}</p>
          <p>Username: {me.username}</p>
          <p>Email: {me.email}</p>
          <p>Book Count: {me.bookCount}</p>

          <h2>Saved Books</h2>
          {me.savedBooks.length > 0 ? (
            <ul>
              {me.savedBooks.map((book) => (
                <li key={book.bookId}>
                  <p>Book ID: {book.bookId}</p>
                  <p>Title: {book.title}</p>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                  <p>Image: {book.image}</p>
                  <p>Link: {book.link}</p>
                  <button onClick={() => handleDeleteBook(book.bookId)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No saved books found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default SavedBooks;
