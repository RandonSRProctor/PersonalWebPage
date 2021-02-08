import React from 'react'

import Card from './Card'

import TetrisApp from '../assets/images/TetrisColor.png'
import WeatherApp from '../assets/images/WeatherApp.png'
import MathPractice from '../assets/images/MathPractice.png'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Weather Website',
                    subTitle: 'Node.js and Express',
                    imgSrc: WeatherApp,
                    link: 'https://rsrp-nodejs-weather-app.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Tetris App',
                    subTitle: 'Vanilla JS Tetris Clone',
                    imgSrc: TetrisApp,
                    link: 'https://codepen.io/randonsrproctor/full/mdOPgWJ',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Math Practice',
                    subTitle: 'Vanilla JS Math Quiz App',
                    imgSrc: MathPractice,
                    link: 'https://codepen.io/randonsrproctor/full/bGEQvGq',
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