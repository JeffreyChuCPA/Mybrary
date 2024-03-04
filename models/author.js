const mongoose = require("mongoose");

//*create schemas (a table in a normal sql database)
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Author", authorSchema); //*name of model/table is first param, 2nd param is the schema
