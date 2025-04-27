import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
function App() {
    const [contacts, setContacts] = useState([]);

    const addPerson = (person) => {
        setContacts([...contacts, person]);
    };

    useEffect(() => {
        console.log(contacts);
        if (contacts.length > 0) {
            console.log(`New contact added: ${contacts[contacts.length - 1].name}`);
            console.log(`Total contacts now: ${contacts.length}`);
        }
    }, [contacts]);

    return (
        <div>
            <h1>Contact Manager App</h1>
            <ContactForm addPerson={addPerson} />
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;