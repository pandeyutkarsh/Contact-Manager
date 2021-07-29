import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {

 const contacts = [
   {
      id:"1",
      "name":"Utkarsh",
      "email":"utkarsh@gmail.com",
   },
   {
    id:"2",
    "name":"Rajat",
    "email":"Rajat@gmail.com",
 },
 ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />

    </div>
  );
}

export default App;
