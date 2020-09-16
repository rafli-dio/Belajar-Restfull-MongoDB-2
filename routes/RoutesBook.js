const express = require("express");
const router = express.Router();
const ControlleBook = require("./../controller/ControlleBook");
const { createBook, getAllBook, deleteBook, updateBook } = ControlleBook;

router.route("/").post(createBook).get(getAllBook);
module.exports = router;
router.route("/:id").delete(deleteBook).put(updateBook);
