import React from 'react';
import { useAuth } from '../store/auth';

const Contact = () => {
    const { user } = useAuth();
    const userData = user?.data || {}; // Extract user data

    console.log("Authenticated user in Contact page:", user);
    return (
        <div>
            <h1>Contact Us</h1>
            <h4>Email: {userData.email}</h4>
            <h4>Name: {userData.name}</h4>
            <p>If you have any questions or feedback, feel free to reach out to us at:</p>
            <a href="mailto:info@gmail.com"/> 

        </div>
    );
};

export default Contact;