import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, username, id}= friend;
    return (
        <div>
            <h3>{name}</h3>
            <h2><Link to={`/${id}`}>{username}</Link></h2>
        </div>
    );
};

export default Friend;