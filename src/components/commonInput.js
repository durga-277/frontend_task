import React, { useState, useEffect } from "react";


const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const InputHandler = ({ onSubmit, editMode = false, currentUser = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Effect to update fields when editing a user
  useEffect(() => {
    if (editMode && currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
    } else {
      setName("");
      setEmail("");
    }
  }, [editMode, currentUser]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    onSubmit({ name, email });
    setName(""); // Clear name field after submission
    setEmail(""); // Clear email field after submission
    setEmailError(""); // Clear any previous email error
  };

  return (
    <div className="input-handler">
      <div className="header-box">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Clear email error when user changes input
          }}
        />
        <button type="button" onClick={handleSubmit}>
          {editMode ? "Edit user" : "Add user"}
        </button>
      </div>
      {emailError && <p className="error-message">{emailError}</p>}
    </div>
  );
};

export default InputHandler;
