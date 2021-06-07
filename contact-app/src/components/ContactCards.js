import React from "react"
import { Link } from "react-router-dom"
import user from "../images/user.png"

const ContactCards = (props) => {
    const { id, name, email } = props.contact

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>

                <Link to={{ pathname: `/edit`, state: {contact : props.contact}}}>
                    <i className="edit alternate outline icon"
                        style={{
                            color: "blue", marginTop: "7x",
                            position: "sticky", marginLeft: "10px",
                            paddingLeft: "1060px"
                        }}/>
                </Link>

                <i className="trash alternate outline icon"
                    style={{
                        color: "red", marginTop: "7x",
                        position: "sticky", marginLeft: "10px",
                        paddingLeft: "10px"
                    }}
                    onClick={() => props.clickHandler(id)} />
            </div>

        </div>
    );
}

export default ContactCards