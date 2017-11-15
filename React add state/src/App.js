import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
  return <h1>GM Tuts .. !!</h1>
}

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      topics : ['React','Webpack','Angular','Angular2'],
      //topic : "",
    }
    this.input;
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  inputChangeHandler(e) {
    this.setState({
      topic : e.target.value
    })
  }

  onKeyPress(e) {
    if(e.key === "Enter"){
      this.setState({
        topics : [...this.state.topics,/*this.state.topic*/ this.input.value] // spread operator
      })
      this.input.value = "";
    }
  }

  render(){
    return (
      <div>
        <Title />
        <input ref={input => this.input = input} type="text" value={this.state.topic} /*onChange={this.inputChangeHandler}*/ onKeyPress={this.onKeyPress}/>
        {this.state.topics.map((topic,index) => {
          return <p key={index} >{topic}</p>
        })}
      </div>
    )
  }
}
