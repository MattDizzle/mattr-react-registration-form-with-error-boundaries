import './App.css';

import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    )
  }
}
