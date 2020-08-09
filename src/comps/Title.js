import React from "react";
import LoginForm from "./LoginForm";

const Title = ({ user }) => {
  return (
    <div className='title'>
      <div className='nav'>
        <h1>ArtGram</h1>
        <LoginForm user={user} />
      </div>
      <h2>Hi, I'm Ujjaini</h2>
      <p style={{ marginBottom: !user ? "5vh" : "" }}>
        I'm an India-based artist and photographer.
        <br />
        Welcome to my gallery 😊
      </p>
    </div>
  );
};

export default Title;
