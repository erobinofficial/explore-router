import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, address, phone, email} = friend;
    return (
        <div>
            <h2>Introduction to my friend</h2>
            <h4>Name: {name}</h4>
            <h5>Address: {address.city}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Email: {email}</h5>
        </div>
    );
};

export default FriendDetails;