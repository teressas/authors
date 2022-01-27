import './App.css';
import React from 'react'
import {
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="container">
      <h1>Favorite authors</h1>

      <Switch>
        {/* Show Author Form */}
        <Route exact path="/authors/new">
          <div>
            <Link to="/authors/"> Home </Link>
            <AuthorForm />
          </div>
        </Route>

        {/* Update Authors Form */}
        <Route exact path="/authors/:id">
          <div>
            <Link to="/authors/"> Home </Link>
            <UpdateForm />
          </div>
        </Route>

        {/* Show Authors */}
        <Route exact path="/authors/">
          <div>
            <Link to="/authors/new"> Add an author </Link>
            <Main />
          </div>
        </Route>

        {/* Redirects "/" route to "/authors" so user doesn't go to blank page */}
        <Route path="/">
          <Redirect to="/authors"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
