import AddContact from "./components/AddContact/AddContact";
import React, { useState } from 'react'


function App() {

  let [contacts, setContacts] = useState([]);

  function handleNewContact(newContact){
    let newContactsArray = [...contacts]
    newContactsArray.push(newContact)
    setContacts(newContactsArray)
    console.log(contacts)
  }
  return (
    <div className="App">
      <AddContact
      
        handleNewContact={handleNewContact}
      />
    </div>
  );
}

export default App;
