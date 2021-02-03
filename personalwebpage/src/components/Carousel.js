import React from 'react'

import Card from './Card'

import TetrisApp from '../assets/images/TetrisApp.png'
import WeatherApp from '../assets/images/WeatherApp.png'
import RandyProctorCropped from '../assets/images/RandyProctorCropped.png'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Weather Website',
                    subTitle: 'Weather report from anywhere in the world.',
                    description: 'Node.js using Express for API calls',
                    imgSrc: WeatherApp,
                    link: 'https://rsrp-nodejs-weather-app.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Tetris App',
                    subTitle: 'A Simple Tetris Clone',
                    description: 'Built using Vanilla JS',
                    imgSrc: TetrisApp,
                    link: 'http://127.0.0.1:5500/index.html',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: RandyProctorCropped,
                    link: 'https://devgrub.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;