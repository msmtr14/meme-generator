import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormGroup, Button ,FormControl, ControlLabel, Col, Checkbox } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import FooterLayout from './Footer';
import Header from './Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form horizontal>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({text0: event.target.value})}
            ></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({text1: event.target.value})}
            ></FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem 
                key={index} 
                meme={meme}
                text0={this.state.text0}
                text1={this.state.text1}
              />
            )
          })
        }
          <div className="" onClick={() => {
              this.setState({memeLimit: this.state.memeLimit+10})
            }}>
            <Button bsStyle="primary" bsSize="large" block>
              Load 10 more memes...
            </Button>
            <br />
            <br />
          </div>
          <FooterLayout />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);