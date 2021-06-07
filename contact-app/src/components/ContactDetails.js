import React from "react";
import {Link} from "react-router-dom"
import user from "../images/user1.png"

const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt ="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="center-div">
                    <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="ui button blue center">Back to Contact List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails