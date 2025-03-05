import React, { useState } from "react";

const SubscribeForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", { fullName, email });
  };

  // Inline styles for the form
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "2px",
    width: "100%",
    maxWidth: "400px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "1px solid #D8D8D8",
    borderRadius: "8px",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#DDDDDD",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    background: "linear-gradient(to bottom left, #DE3C98 0%, #5D08B7 100%)",
    backgroundOrigin: "border-box",  /* Ensures the background covers the padding */
    backgroundClip: "border-box",  /* Makes sure the gradient covers the whole button */
    padding: "12px 20px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    borderRadius: "9px",
    cursor: "pointer",
    marginTop:"8px",
    width:"100%"
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
        style={inputStyle}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email ID"
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>
      Get updates
      </button>
    </form>
  );
};

export default SubscribeForm;
