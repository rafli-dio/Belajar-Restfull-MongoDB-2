const Model = require("./../model/ModelBook");

// post data
exports.createBook = async (req, res) => {
  try {
    const { judul, tahun, penerbit } = req.body;
    const newBook = new Model({
      judul,
      tahun,
      penerbit,
    });
    const saveBook = await newBook.save();
    res.status(200).json({
      status: "succes",
      message: "data has been added succesfully",
      result: saveBook,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all data
exports.getAllBook = async (req, res) => {
  try {
    const getBook = await Model.find();
    res.status(200).json({
      status: "succes",
      message: "oke kamu jos",
      result: getBook,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete data
exports.deleteBook = async (req, res) => {
  await Model.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: "data has been deleted succesfully",
    });
  });
};

// update data
exports.updateBook = async (req, res) => {
  await Model.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: "data has been update succesfully",
      result: result,
    });
  });
};
