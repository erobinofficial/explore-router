import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Home = () => {
    const friends = useLoaderData();
    return (
        <div>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;