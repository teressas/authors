import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";


const AuthorForm = (props) => {
    
    // declare variables
    const [name, setName] = useState("");
    
    const [errArray, setErrArray] = useState([])

    const history = useHistory()

    // handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        setName("")
        // calls server
        axios.post('http://localhost:8000/api/authors', { name })
            .then(res => {
                console.log(res.data)
                setName(name)
                history.push("/authors")
            })
            .catch(err => {
                // pulls in errors
                const errResponse = err.response.data.errors
                console.log(errResponse )
                let tempArr = [];
                // for every key in errResponse , if the key exists, push the error msg into tempArr
                for (const key in errResponse) {
                    if (errResponse.hasOwnProperty(key)) {
                        tempArr.push(`${errResponse[key].message}`)
                    }
                }
                // returns the error messages
                setErrArray(tempArr)
            })
    }

    return (
        <fieldset className="container-sm mt-3 mb-5">
            <h3>Add a new author:</h3>
            <legend>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group mt-3">
                        <label>Name: </label><br />
                        <input name="name" type="text" onChange={e => setName(e.target.value)} value={name} placeholder='name' />
                        {/* loops through all error messages in the array and returns the message */}
                        {
                            errArray.map((err, i) => (
                                <p key={i}>{err}</p>
                            ))
                        }
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-sm btn btn-outline-success">
                            <Link to="/authors">Cancel</Link>
                        </button>
                        <button className="btn btn-sm btn btn-info">Submit</button>
                    </div>
                </form>

            </legend>
        </fieldset>
    );

}
export default AuthorForm;

