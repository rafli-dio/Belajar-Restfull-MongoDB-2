const monggoose = require("mongoose");

// schema
const bookSchema = monggoose.Schema({
  judul: {
    type: String,
  },
  tahun: {
    type: Number,
  },
  penerbit: {
    type: String,
  },
});
const bookModel = monggoose.model("Book", bookSchema);
module.exports = bookModel;
