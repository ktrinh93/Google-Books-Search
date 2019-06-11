import axios from "axios";

export default {
  // queries Google Books API
  queryGoogleFor: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book)
  },

  // Gets all books from db
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes a book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
