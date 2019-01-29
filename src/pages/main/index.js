import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';

import { Container } from './styles';

class Main extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    );
  }
}

export default Main;
