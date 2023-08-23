import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {v4 as uuid} from "uuid";

//1 Add component which have exported already
function App() {

  const LOCAL_STORAGE_KEY="contacts";
  //5. create local contacts array
  //10. remove the array and use usestate react hook
  const [contacts, setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, {id:uuid(), ...contact}]);
  };

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    });

    setContacts(newContactList);
  };
  
  useEffect(()=>{
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch>
        <Route
        path="/"
        exact
        render={(props)=>(<ContactList
          {...props}
          contacts={contacts}
          getContactId={removeContactHandler} 
          />
          )}
        />

        <Route
        path="/add"
        exact
        render={(props)=>(<AddContact
          {...props}
          addContactHandler={addContactHandler}
          />
          )}
        />
      </Switch>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
    //6  Pass contacts array as props to ContactList.js
  );
}

export default App;