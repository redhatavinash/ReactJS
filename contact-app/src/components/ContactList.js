import React from "react";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{
    //7 passed props (contacts) from app.js

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    //8 create this function to display name and email from contacts array passed as props
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} 
            clickHandler={deleteContactHandler}
            key={contact.id}
            ></ContactCard>
        );
    })

    //4 create div for contact list
    return(
        <div className="ui celled list">
            {renderContactList}         
        </div> 
        //Pass renderContactList here to show the list, () avoided because we are not executing it.
     );
};

export default ContactList;