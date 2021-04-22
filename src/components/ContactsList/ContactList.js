import React from 'react';
import './ContactList.css'

const ContactList = (props) => {
    
    return (
        <div>
            {props.contacts.map((item, index) =>(
                <ul key={item.id}>
                    <li>name: {item.name}</li>
                    <li>surname: {item.surname}</li>
                    <li>phone: {item.phone}</li>
                    <li>
                        <button onClick={() => props.handleDeleteContact(item.id)}>
                            delete
                        </button>
                        <button onClick={() => props.handleEditIndex(index)}>edit</button>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;