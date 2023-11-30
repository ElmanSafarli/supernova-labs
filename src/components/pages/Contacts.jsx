import React, { useState } from 'react';
import NavBar from '../include/navBar';
import Footer from '../include/footer';
import SuccessSend from '../include/succesSend';

const Contacts = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSuccess(true);
                setIsError(false);
                console.log('Email sent successfully!');
            } else {
                setIsSuccess(false);
                setIsError(true);
                console.error('Failed to send email');
            }
        } catch (error) {
            setIsSuccess(false);
            setIsError(true);
            console.error('Error sending email:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="contact">
                <div className="contact-content">
                    {isSuccess && (
                        <SuccessSend />
                    )}

                    {isError && (
                        <div className="error-message">
                            <h2>Oops! Something went wrong. Please try again later.</h2>
                        </div>
                    )}

                    {!isSuccess && !isError && (
                        <form onSubmit={handleSubmit}>
                            <div className="contact-title">
                                <h1>Your feedback is invaluable in shaping the future of our apps.</h1>
                            </div>
                            <div className="contact-input">
                                <input type="text" placeholder="Name" name="firstName" onChange={handleChange} required />
                            </div>
                            <div className="contact-input">
                                <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} required />
                            </div>
                            <div className="contact-input">
                                <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} required />
                            </div>
                            <div className="contact-input">
                                <textarea name="message" placeholder="Your message" onChange={handleChange} required></textarea>
                            </div>
                            <button>Send</button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;
