import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import DeleteBtn from "../components/DeleteBtn";
import { Row, Container } from "../components/Grid";
import SearchDiv from "../components/SearchDiv";
import ResultsDiv from "../components/ResultsDiv";
import BookListItem from "../components/BookListItem";
import API from "../utils/API";

class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    gBooksResults: [],
    gBookQuery: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <ResultsDiv>
              {this.state.gBooksResults.length ? (
                <div>
                  {this.state.gBooksResults.map(book =>
                    <BookListItem
                      key={book.etag}
                      thumb="https://via.placeholder.com/150x200"
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink} />
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

export default Saved;
