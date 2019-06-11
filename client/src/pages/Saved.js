import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import DeleteBtn from "../components/DeleteBtn";
import { Row, Container } from "../components/Grid";
import ResultsDiv from "../components/ResultsDiv";
import BookListItemSaved from "../components/BookListItemSaved";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: [],
    gBookQuery: ""
  };

  // gets all books from db and save them to this.state.savedBooks
  componentDidMount() {
    let self = this;
    API.getBooks()
    .then(function(res) {
      self.setState({savedBooks: res.data});
      console.log(res.data);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  handleDeleteBook = event => {   
    API.deleteBook(event.target.getAttribute("data-id"));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <ResultsDiv>
              {this.state.savedBooks.length ? (
                <div>
                  {this.state.savedBooks.map(book =>
                    <BookListItemSaved
                      key={book._id}
                      dbid={book._id}
                      thumb="https://via.placeholder.com/150x200"
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      link={book.link}
                      delBook={this.handleDeleteBook}/>
                  )}
                </div>
              ) : (
                  <p>No books saved</p>
                )}
            </ResultsDiv>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
