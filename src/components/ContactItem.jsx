function ContactItem({ contact }) {
    return (
        <li>
            — Name: <strong>{contact.name}</strong> - Email: {contact.email}
        </li>
    );
}
  
export default ContactItem;