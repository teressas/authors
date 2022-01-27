const Author = require("../models/author.model")

module.exports.index = (req, res) => {
    res.json({
        message: "Hello"
    });
}

// Retrieve all authors
module.exports.allAuthors = (req, res) => {
    // sort the authors by ascending order
    Author.find().sort({name : 1})
        .then(allAuthors => {
            // { authors: allAuthors }
            res.json(allAuthors)
        })
        // .catch(err => res.json({ message: "Something went wrong", error: err }));
        .catch(err => res.json({ message: "Something went wrong", errork: err }));

}

// Retrieve one authors
module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => {
            res.json(author)
        })
        // .catch(err => res.json({ message: "Something went wrong", error: err }));
        .catch(err => res.status(400).json(err))

};

// Create a new author
module.exports.createAuthor = (req, res) => {
    // create an instance of Author and then passes in the attributes required to create the Author from the req.body
    // req.body comes from a form
    // create is a method
    Author.create(req.body)
        // will only execute upon successfully inserting data in the database
        .then(newAuthor =>
            res.json(newAuthor)
        )
        // will execute only if there is an error.
        // .catch(err => res.json({ message: "Something went wrong", error: err }));
        .catch(err => res.status(400).json(err))
};

// // create reminder 2 (alternative)
// module.exports.createAuthor2 = (req, res) => {
//     const newAuthor = new Author(req.body) // instantiates a Author according to model (locally, not in dbs)
//     newAuthor.save()
//         .then(newAuthor => res.json({ result: newAuthor }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }))

// }

// Retrieve one authors
module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Update a author
module.exports.updateAuthor = (req, res) => {
    // can also use findByIdAndUpdate()
    console.log(req.params)
    Author.findOneAndUpdate(
        // need 3 things to update: id, req.body (what you are updating), validator
        { _id: req.params.id },
        req.body,
        // for validation
        { new: true, runValidators: true })
        .then(author => res.json(author))
        // .catch(err => res.json({ message: "Something went wrong", error: err }));
        .catch(err => res.status(400).json(err))

};


// Delete a author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
