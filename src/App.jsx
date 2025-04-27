import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./css/App.css";

function App() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, { ...contact, id: Date.now() }]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div className="app">
            <h1>Contact Manager App</h1>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} onDelete={deleteContact} />
        </div>
    );
}

export default App;