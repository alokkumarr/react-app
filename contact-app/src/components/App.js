import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { uuid } from "uuidv4";
import api from '../api/contacts';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setsearchResult] = useState([])

  // RetriveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact)
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    console.log(response.data)
    const { id, name, email } = response.data
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact;
    }));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    }
    );

    setContacts(newContactList)
  }

  const searchHandler = (searchTerm) => {
    //console.log(searchTerm)
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
         return Object.values(contact).join(" ")
         .toLowerCase()
         .includes(searchTerm.toLowerCase())
      })
      setsearchResult(newContactList)
    } else {
      setsearchResult(contacts)
    }
  }

  useEffect(() => {
    //const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //console.log("Retrive JSON Data : ", retrieveData)
    //if (retrieveData) setContacts(retrieveData)
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    };

    getAllContacts()
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])


  return (
    <div className="ui container">
      <Router>
        <Header />
        <br /><br /><br />
        <Switch>
          <Route
            path="/" exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={ searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )} />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact {...props} updateContactHandler={updateContactHandler} />
            )} />

          <Route
            path="/contact/:id"
            component={ContactDetails} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
