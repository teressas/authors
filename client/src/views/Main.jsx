import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = () => {

    // const [message, setMessage] = useState("Loading...")

    // declare useState variables
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api")
    //         .then(res => setMessage(res.data.message))
    // }, []);

    // returns all the data from the db
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
                console.log(res.data);
                setLoaded(true);
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    // deletes an author from the db
    const deleteAuthor = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/authors/delete/" + deleteId)
          .then(res => {
            console.log(res.data);
            console.log("SUCCESS DELETE!");
            // remove from DOM after delete success
            setAuthors(authors.filter((author) => author._id !== deleteId))
          })
          .catch(err => console.log(err))
      }

    return (
        <div>
            <AuthorList authors={authors} deleteAuthor={deleteAuthor}/>
        </div>
    )
};

export default Main;
