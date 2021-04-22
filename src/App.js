import AddContact from "./components/AddContact/AddContact";
import React, { useState } from 'react'
import ContactList from "./components/ContactsList/ContactList";


function App() {

  let [contacts, setContacts] = useState([]);

  function handleNewContact(newContact){
    let newContactsArray = [...contacts]
    newContactsArray.push(newContact)

    setContacts(newContactsArray)
    
  }

  function handleDeleteContact(id){
    let newContactsArray = contacts.filter(item =>{
      return item.id != id
    })
    setContacts(newContactsArray)
   
  }



  return (
    <div className="App">
      <AddContact
      
        handleNewContact={handleNewContact}
      />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
