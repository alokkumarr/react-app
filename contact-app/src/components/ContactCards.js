import React from "react"
import { Link } from "react-router-dom"
import user from "../images/user.png"

const ContactCards = (props) => {
    const {id, name, email} = props.contact

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <Link to={`/contact/${id}`}>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </Link>
            <i className="trash alternate outline icon"
                style={{color:"red", marginTop: "2x", position: "sticky", left: "Email", paddingLeft: "1100px" }}
                onClick={() => props.clickHandler(id)}
                ></i>
            </div>
    );
}

export default ContactCards