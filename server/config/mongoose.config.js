const mongoose = require("mongoose");

// connects to mongoose db and creates the new db
mongoose.connect("mongodb://localhost/author_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));