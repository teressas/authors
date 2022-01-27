import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";

const UpdateForm = (props) => {

    // declare variables
    const { id } = useParams();

    const [name, setName] = useState("");

    const [errForm, setErrForm] = useState({})
    const [errors, setErrors] = useState([]); 
    const [errorArr, setErrorArr] = useState([]);

    const [found, setFound] = useState(false)

    const history = useHistory();

    // use useEffect to call api once page is rendered
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                setFound(true);
            })
            .catch(err => {
                console.log(err)
                // history.push("/authors/error")
            }
            )
    }, [id]);

    // once user changes the data in the form, this will process the submission
    const updateAuthor = (e) => {
        e.preventDefault();
        setName("")
        // calls the data from the server, to find one author by the name and update the name
        // after that, use history.push to redirect the user back to the show all authors page
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res => {
                console.log(res.data)
                setName(name)
                history.push("/authors")
            })
            // .catch(err => console.error(err));
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                console.log(errorResponse)
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    
    return (
        <>
            {found ?
                <fieldset className="container-sm mt-3 mb-5">
                    <h3 style={{ color: 'purple' }}>Edit this author:</h3>
                    <legend>
                        <form onSubmit={updateAuthor}>
                            <div className="form-group mt-3">
                                <label>Name: </label><br />
                                <input name="name" type="text" onChange={e => setName(e.target.value)} value={name} placeholder='name' />
                        
                            </div>
                            <div className="form-group mt-3">
                                <button className="btn btn-sm btn btn-outline-success">
                                    <Link to="/authors">Cancel</Link>
                                </button>
                                <button className="btn btn-sm btn btn-info">Submit</button>
                            </div>
                        </form>
                    </legend>
                </fieldset> :
                <div>
                    <p>Author is not found</p>
                    <Link to="/authors/new">Add an Author</Link>
                </div>
            }
        </>

    )
};

export default UpdateForm;
