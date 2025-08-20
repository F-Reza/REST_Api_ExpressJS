import React from 'react';
import Menu from './Menu';

const Error404 = () => {
    return (
        <div>
            <Menu />
            <h1>404 Error</h1>
            <p>Page not found. Please check the URL or return to the home page.</p>
            <a href="/">Go to Home</a>
        </div>
    );
};

export default Error404;