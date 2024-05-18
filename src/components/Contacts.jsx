import React from "react";
import "./Contacts.css";
import ContactsItem from "./ContactsItem";

const contactsList = [{
  name: 'Github',
  url: 'https://github.com/syj7421?tab=repositories',
  img: require('../Assets/Images/github-logo.webp')
},
{
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/sooyoungjung/',
  img: require('../Assets/Images/linkedin-logo.png')
}]
function Contacts(){
  return <div className="contacts" id="contacts">
    <h2>Contacts</h2>
    <ContactsItem contacts={contactsList}/>
  </div>

}

export default Contacts;