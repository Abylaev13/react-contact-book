import React, { useState } from 'react';

const AddContact = (props) => {

    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [phone, setPhone] = useState('');
    
    function handleClick(){
        let newContact = {
            name,
            surname,
            phone
        }
        props.handleNewContact(newContact)
    }
    return (
        <div>
            <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Имя"
            />
            <input 
                onChange={(e) => setSurname(e.target.value)} 
                type="text" 
                placeholder="Фамилия"
                />
            <input 
                onChange={(e) => setPhone(e.target.value)}
                type="text" 
                placeholder="Номер телефона"
                />
            <button onClick={handleClick}>Add contact</button>
        </div>
    );
};

export default AddContact;