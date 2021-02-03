import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Randy Proctor',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Born to Run',
        subtitle: 'Rock Musician turned Developer',
        text: 'See my projects below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: "Let's talk",
      }
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Randy Proctor</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

              <Route path="/" exact render={ () => 
                <HomePage 
                  title={this.state.home.title}
                  subtitle={this.state.home.subtitle} 
                  text={this.state.home.text}
                /> } 
              />

              <Route path="/about" exact render={ () => 
                <AboutPage 
                  title={this.state.about.title}
                /> } 
              />

              <Route path="/contact" exact render={ () => 
                <ContactPage 
                  title={this.state.contact.title}
                /> } 
              />

            <Footer />


          </Container>
      </Router>
    );
  }
}

export default App;
