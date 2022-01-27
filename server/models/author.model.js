const mongoose = require("mongoose");

// creates the schema in the database
const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters"],
        // default:  "no title"
    }
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;