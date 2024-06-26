import React from 'react';

function Home({ handleLogout }) {
    return (
        <div className="home-container">
            <h1>HOME</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    )
}

export default Home;
