import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import DeleteBtn from "../components/DeleteBtn";
import { Row, Container } from "../components/Grid";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
import BookListItem from "../components/BookListItem";
import API from "../utils/API";

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    gBooksResults: [],
    gBookQuery: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.queryGoogleBooks("Searching for God Knows What");
  }

  handleFormChange = event => {
    this.setState({ gBookQuery: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.queryGoogleBooks(this.state.gBookQuery);
  }

  // gets books from Google Books API
  queryGoogleBooks(bookQuery) {
    let self = this;

    let formattedBookQuery = bookQuery.trim().replace(/ /g, "+");
    this.setState({ gBookQuery: formattedBookQuery });
    API.queryGoogleFor(formattedBookQuery || this.state.gBookQuery)
      .then(function (res) {
        console.log(res.data.items);
        self.setState({ gBooksResults: res.data.items });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <SearchDiv onChange={this.handleFormChange} onSubmit={this.handleFormSubmit} />
            <ResultsDiv>
              {this.state.gBooksResults.length ? (
                <div>
                  {this.state.gBooksResults.map(book =>
                    <BookListItem
                      key={book.etag}
                      thumb="https://via.placeholder.com/150x200"
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description} />
                  )}
                </div>
              ) : (
                  <p>No books found</p>
                )}
            </ResultsDiv>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
