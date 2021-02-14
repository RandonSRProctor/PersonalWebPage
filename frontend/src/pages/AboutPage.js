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
                <p>Randy Proctor is fullstack developer from Cincinnati, OH.</p>
                <p>Randy graduated from Tech Elevator Bootcamp in 2020.</p>
                <p>Randy's original stack was Javascript for frontend, Java for backend, and relational DBs.</p>
                <p>Randy has since learned to use NoSQL DBs and JS frameworks such as Vue.js and React</p>
                <p>as well as Node.js and Express for his backend.</p>
                <p>In addition to coding, Randy enjoys investing into the Cincinnati tech community.</p>
                <p>Randy volunteers for Cincinnati Software Craftsmanship and returns to Tech Elevator</p>
                <p>to encourage and help with new developers as they begin their journey.</p>
                <p>See Randy's resume <a href="https://drive.google.com/file/d/1E4Uh-4ZOf7-gMSTc9n7mTBmjsgJRlmy9/view?usp=sharing">here</a>.</p>
                <p>See Randy's GitHub <a href="https://github.com/RandonSRProctor">here</a>.</p>
            </Content>
        </div>
    );

}

export default AboutPage;