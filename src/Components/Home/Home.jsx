import React from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skill/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            
            <Nav></Nav>
            <Banner></Banner>
            <div id='about'>
            <About></About>
            </div>
            <div id='skills'>
                <Skills></Skills>
            </div>
            <div id='projects'>
                <Projects></Projects>
            </div>
            <div id='contact'>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;