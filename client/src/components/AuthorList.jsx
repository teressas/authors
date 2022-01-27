import React from 'react';
import { Link } from "react-router-dom"

const AuthorList = (props) => {

    const { authors, deleteAuthor } = props
    
    return (
        <div>
            {/* {JSON.stringify(authors)} */}
            <h5>We have quotes by:</h5>
            {
                // if authors exists, return the data in a table, if not return Loading...
                authors ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th colSpan={2}>Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authors.map((author, i) => (
                                    <tr key={i}>
                                        <td>{author.name}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">
                                                <Link to={`/authors/${author._id}`} > Edit</Link>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) :
                    <h1> Loading...</h1>
            }
        </div>
    )
        ;
};

export default AuthorList;
