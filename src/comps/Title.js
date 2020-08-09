import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Title = ({ user }) => {
  return (
    <Router>
      <div className='title'>
        <div className='nav'>
          <h1>ArtGram</h1>
          <Route
            path='/login'
            exact
            render={(props) => <LoginForm {...props} user={user} />}
          />
        </div>
        <h2>Hi, I'm Ujjaini</h2>
        <p style={{ marginBottom: !user ? "5vh" : "" }}>
          I'm an India-based artist and photographer.
          <br />
          Welcome to my gallery 😊
        </p>
      </div>
    </Router>
  );
};

export default Title;
