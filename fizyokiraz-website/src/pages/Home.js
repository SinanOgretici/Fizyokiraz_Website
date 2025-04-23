import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <h1>Welcome to Fizyokiraz Fizyoterapi</h1>
                <Services />
                <About />
                <Contact />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Home;