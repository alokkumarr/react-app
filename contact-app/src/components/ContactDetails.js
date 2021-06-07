import React from "react"
import { Link } from "react-router-dom"
import user from "../images/user.png"

const ContactCards = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">Alok</div>
                    <div className="description">Alok.R@gmail.com</div>
                </div>
            </div>
        </div>
    );
}


export default ContactDetails;