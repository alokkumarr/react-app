import React, { useRef } from "react"
import { Link } from "react-router-dom"
import ContactCards from "./ContactCards"

const ContactList = (props) => {
    console.log("contactList", props)
    const inputE1 = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCards
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id} />
        );
    });

    const getSearchTerm = () => {
        //console.log(inputE1);
        props.searchKeyword(inputE1.current.value)
    }

    return (
        <div className="main">
            <h2>Contact list &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/add">
                    <button className="ui button blue right">
                        Add Contact
                </button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputE1}
                    type="text" 
                    placeholder="Search Contact" 
                    className="prompt" 
                    value={props.term}
                    onChange={getSearchTerm}/>
                    <i className="search icon" />
                </div>
            </div>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
}

export default ContactList