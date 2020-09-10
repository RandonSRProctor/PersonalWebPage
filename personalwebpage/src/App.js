import React from 'react';
import './App.css';

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
        subtitle: 'Touring Rock Musician turned Developer',
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
      <div>Hello World!</div>
    );
  }
}

export default App;
