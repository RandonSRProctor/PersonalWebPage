import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';


import Iframe from 'react-iframe';

function HomePage(props) {

    return (
        <div>
            <Hero 
            title={props.title}
            subtitle={props.subtitle} 
            text={props.text}
            />
            <Carousel />
            <Iframe url="https://codepen.io/randonsrproctor/pen/KKNoewa"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
        </div>
        
    );

}

export default HomePage;