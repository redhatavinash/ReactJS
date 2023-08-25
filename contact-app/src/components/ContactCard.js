import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';

const ContactCard=(props)=>{
    //9 create a list as under to avoid using 
    //contact.name or contact.email again and again, simply write name and email after this
    const {id,name,email}=props.contact;

    //8 create ContactCard function to return to ContactList in rendContactList function
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
            <div className="header">
                {name}
            </div>
            <div>{email}
            </div>
            </Link>
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red",marginTop:"7px"}}
        onClick={()=>props.clickHandler(id)}></i>
    </div>
    );
};

export default ContactCard;