import './App.css';

import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.firstNameInput = React.createRef();
  //   this.lastNameInput = React.createRef();
  //   this.emailInput = React.createRef();
  //   this.dobInput = React.createRef();
  //   this.passwordInput = React.createRef();
  //   this.repeatPasswordInput = React.createRef();
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const firstName = this.firstNameInput.current.value;
  //   const lastName = this.lastNameInput.current.value;
  //   const email = this.emailInput.current.value;
  //   const dob = this.dobInput.current.value;
  //   const password = this.passwordInput.value;
  //   const repeatPassword = this.repeatPassword;

  //   console.log('firstName:', firstName);
  //   console.log('lastName:', lastName);
  //   console.log('email:', email);
  //   console.log('dob:', dob);
  //   console.log('password:', password)
  //   console.log('repeatPassword:', repeatPassword)

  // }
  
  render() {
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
