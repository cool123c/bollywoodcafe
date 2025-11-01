import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the best dining with us!</p>
            <section>
                <h2>Highlights</h2>
                <ul>
                    <li>Fresh Ingredients</li>
                    <li>Expert Chefs</li>
                    <li>Cozy Atmosphere</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;