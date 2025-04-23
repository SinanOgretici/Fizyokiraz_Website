import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path as necessary

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Fizyokiraz Logo" />
            <h1>Fizyokiraz Fizyoterapi ve Reformer</h1>
        </header>
    );
};

export default Header;