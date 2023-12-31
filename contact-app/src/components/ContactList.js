import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{

    console.log(props);
    //7 passed props (contacts) from app.js

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    const contacts=[{
        id:"1",
        name:"avinash pandey",
        email:"avinashpandeypro@gmail.com",
    },
];
    
    
    //8 create this function to display name and email from contacts array passed as props
    const renderContactList=contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} 
            clickHandler={deleteContactHandler}
            key={contact.id}
            ></ContactCard>
        );
    })

    //4 create div for contact list
    return(
        <div class="main">
            <h2>Contact List</h2>
            <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
            </Link>
            
        <div className="ui celled list"> {renderContactList} </div> 
        </div>

        //Pass renderContactList here to show the list, () avoided because we are not executing it.
     );
};

export default ContactList;