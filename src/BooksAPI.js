const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const get = bookId => {
  // `${api}/books/${bookId}`   to get single book with id
  // method get
};

export const getAll = () => {
  // `${api}/books` to get all books
  // method get
};

export const update = (book, shelf) => {
  // `${api}/books/${book.id}`  to put update book on shelf
  // method put
};

export const search = query => {
  // `${api}/search`  to search books in shelf
  // method post
};
