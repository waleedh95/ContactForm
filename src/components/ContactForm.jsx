import React, { useState } from "react";
import "../css/ContactForm.css";

function ContactForm({ addContact }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        addContact({ name, email });
        setName("");
        setEmail("");
    };

    return (
        <div className="contact-form-container">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                />
                <button type="submit" className="submit-btn">
                    Add Contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;