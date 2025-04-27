import ContactItem from './ContactItem';

function ContactList(props) {
    return (
        <div>
            <ul>
                {props.contacts.map((contact, index) => (
                    <ContactItem contact={contact} key={index}/>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;