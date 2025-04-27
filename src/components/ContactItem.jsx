import "../css/ContactItem.css";

function ContactItem({ contact, onDelete }) {
    return (
        <li className="contact-item">
            <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-email">{contact.email}</span>
            </div>
            <button 
                className="delete-btn"
                onClick={onDelete}
            >
                Delete
            </button>
        </li>
    );
}

export default ContactItem;