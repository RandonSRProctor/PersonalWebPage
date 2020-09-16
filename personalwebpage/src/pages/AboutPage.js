import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {

    return (
        <div>
            <Hero 
            title={props.title}
            />

            <Content>
                <p>Randy Proctor is a bad dude.</p>
                <p>And not the bad kind of bad.</p>
                <p>When I say bad, I mean good.</p>
                <p>And when I say good, I mean <i>bad to the bone.</i></p>
            </Content>
        </div>
    );

}

export default AboutPage;