const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    console.log("server/routes")
    // index route
    app.get("/api", AuthorController.index);
    // shows all authors
    app.get('/api/authors', AuthorController.allAuthors);
    // goes to new author form
    app.post("/api/authors", AuthorController.createAuthor);
    // shows one author
    app.get("/api/authors/:id", AuthorController.oneAuthor);
    // updates one author
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    // deletes one author
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};