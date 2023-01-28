import React, { useState } from 'react';

const styles = {
  contactSubmitBtn: {
    backgroundColor: "var(--primary)",
    color: "var(--secondary)",
    border: "black 1px solid",
  },
};

export default function Contact(props) {
  const [input, setInput] = useState({
    id: '',
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: input.name,
      email: input.email,
      message: input.message,
    });
    
    setInput({
      id: '',
      name: '',
      email: '',
      message: '',
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <h1>→ Contact Me</h1>
      <p class="my-email">brian.campbell003@gmail.com</p>
      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="name"
            value={input.name}
            placeholder="Your Name"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            value={input.email}
            placeholder="name@example.com"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message-input" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message-input"
            name="message"
            value={input.message}
            rows="5"
            placeholder="Lorem ipsum"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn mb-3" style={styles.contactSubmitBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
}
