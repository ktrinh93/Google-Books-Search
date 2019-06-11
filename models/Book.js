var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new BookSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  link: String
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Note model
module.exports = Book;
