import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("token");
        alert("You have been logged out.");
        window.location.href = "/login"; 
    }, []);
};

export default Logout;