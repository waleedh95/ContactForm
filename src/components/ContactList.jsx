import ContactItem from "./ContactItem";
import "../css/ContactList.css";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list-container">
            <h2>Contacts</h2>
            {contacts.length === 0 ? (
                <p className="no-contacts">No contacts yet.</p>
            ) : (
                <ul className="contact-list">
                    {contacts.map((contact) => (
                        <ContactItem 
                            key={contact.id} 
                            contact={contact} 
                            onDelete={() => onDelete(contact.id)} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ContactList;