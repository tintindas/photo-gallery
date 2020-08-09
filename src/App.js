import React, { useState, useEffect } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import { auth } from "./firebase/config";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);
  return (
    <Router>
      <div className='App'>
        <Title user={user} />
        {user && <UploadForm />}
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </Router>
  );
}

export default App;
