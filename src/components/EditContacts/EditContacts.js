import React, { useState } from 'react';

const EditContacts = (props) => {

    let [name, setName] = useState(props.editContact.name);
    let [surname, setSurname] = useState(props.editContact.surname);
    let [phone, setPhone] = useState(props.editContact.phone);

    function handleSaveClick(){
        let newContact = {...props.editContact}

        newContact.name = name
        newContact.surname = surname
        newContact.phone = phone

        
        setName('')
        setSurname('')
        setPhone('')

        props.handleSaveEditedContact(newContact)
    }

 
  
   
    
    return (
        <div>
            <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Имя"
                value={name}
            />
            <input 
                onChange={(e) => setSurname(e.target.value)} 
                type="text" 
                placeholder="Фамилия"
                value={surname}
                />
            <input 
                onChange={(e) => setPhone(e.target.value)}
                type="text" 
                placeholder="Номер телефона"
                value={phone}
                />
             
            <button onClick={handleSaveClick}>EDIT</button>
        </div>
    );
};

export default EditContacts;