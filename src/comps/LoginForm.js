import React, { useState } from "react";
import { auth } from "../firebase/config";
import { motion } from "framer-motion";

const LoginForm = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const closeForm = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowForm(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setShowForm(false);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(true);
      });
  };

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <div className='login'>
      {!user ? (
        <h1 onClick={() => setShowForm(true)}>Login</h1>
      ) : (
        <h1 onClick={logout}>Log Out</h1>
      )}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='backdrop'
          onClick={closeForm}
        >
          <motion.form
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className='login-form'
            onSubmit={login}
          >
            <label>Email</label>
            <input
              required
              placeholder='abc@xyz.com'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              required
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type='submit'>Login</button>
            {error && (
              <div className='error'>
                Oops! Something went wrong please try again
              </div>
            )}
          </motion.form>
        </motion.div>
      )}
    </div>
  );
};

export default LoginForm;
