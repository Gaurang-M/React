import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    this.delete = this.delete.bind(this);
  }

  inputChangeHandler(e) {
    this.setState({
      topic : e.target.value
    })
  }

  onKeyPress(e) {
    if(e.key === "Enter"){
      if(!this.state.topics.includes(this.input.value)){
        this.setState({
          topics : [...this.state.topics,/*this.state.topic*/ this.input.value], // spread operator
          msg: ''
        })
      }else{
        this.setState({
          msg: 'value already present'
        })
      }
      this.input.value = "";
    }
  }

  delete(e){
    let updatedTopics = this.state.topics.filter(topic => {
      return topic != e;
    })
    this.setState({
      topics: updatedTopics
    })
  }

  render(){
    return (
      <div className="clear">
        <input ref={input => this.input = input} type="text" value={this.state.topic} /*onChange={this.inputChangeHandler}*/ onKeyPress={this.onKeyPress}/>
        {this.state.msg && <p className="danger">{this.state.msg}</p>}
        {this.state.topics.map((topic,index) => {
          return <div key={index} className="clear">
                    <Link className="inline" to='/detail'>{topic}</Link>
                    <button className="inline" onClick={e => this.delete(topic)}>delete</button>
                 </div>
        })}
      </div>
    )
  }
}
