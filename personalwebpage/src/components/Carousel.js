import React from 'react'

import Card from './Card'

import RandyProctorCropped from '../assets/images/RandyProctorCropped.png'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: RandyProctorCropped,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: RandyProctorCropped,
                    link: 'https://devgrub.com',
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