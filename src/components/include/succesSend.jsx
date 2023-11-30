import React from 'react';
import { Link } from "react-router-dom"

const SuccessSend = () => {

    return (
        <div className="success-message">
            <img src={process.env.PUBLIC_URL + '/mail.gif'} alt="send" />
            <h2>Thanks for submitting</h2>
            <p>your message has been sent</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default SuccessSend;
