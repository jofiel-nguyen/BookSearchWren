import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations'; 

import Auth from '../utils/auth';
import { searchGoogleBooks } from '../utils/API';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchBooks = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  // Use the useMutation hook for SAVE_BOOK
  const [saveBookMutation] = useMutation(SAVE_BOOK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!searchInput) {
      return;
    }
    try {
      setLoading(true);
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('Something went wrong while fetching books.');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
      setLoading(false);
    }
  };

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return;
    }

    try {
      // Call the SAVE_BOOK mutation instead of saveBook function
      const { data } = await saveBookMutation({
        variables: {
          input: { ...bookToSave },
        },
      });

      if (data.saveBook?.bookId) {
        setSavedBookIds([...savedBookIds, data.saveBook.bookId]);
      }
    } catch (err) {
      setError('Failed to save the book. Please try again.');
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Row>
          {searchedBooks.map((book) => {
            return (
              <Col key={book.bookId} md="4" >
                <Card key={book.bookId} border='dark'>
                  {book.image ? (
                    <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBook(book.bookId)}>
                        {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchBooks;
