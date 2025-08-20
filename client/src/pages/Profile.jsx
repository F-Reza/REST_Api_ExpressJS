import React from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';

const Profile = () => {

    const {id, name, address} = useParams() ;

    return (
        <div>
            <Menu />
            <h2>Profile Page</h2>
            <p>This is the profile page where user information will be displayed.</p>
            <h3>User ID: {id}</h3>
            <h3>User Name: {name}</h3>
            <h3>User Address: {address}</h3>
            <p>More user details can be added here.</p>
            <p>Feel free to customize this page with additional information or components.</p>
        </div>
    );
};

export default Profile;