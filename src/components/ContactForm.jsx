import React from 'react';
import { useState } from "react";

function ContactForm(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const addPersonSubmit = (e) => {
        e.preventDefault();

        let newPerson = {
            name: username,  // Changed from username to name
            email
        };
        props.addPerson(newPerson);

        setUsername("");
        setEmail("");
    }

    return (
        <div>
            <hr/>
            <h1>Contact Form</h1>
            <h2>Add a person</h2>
            <form onSubmit={addPersonSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                    Add Person
                </button>
            </form>
        </div>
    );
}

export default ContactForm;