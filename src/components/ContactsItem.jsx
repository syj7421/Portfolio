import React from "react";
import "./ContactsItem.css";

function ContactsItem(props){
  return <div className="flex-container">
    {props.contacts.map((contact) => {
      return <div key={contact.name} className="flex-item"><img src={contact.img} alt={contact.name}/></div>
    })}
  </div>
}

export default ContactsItem;