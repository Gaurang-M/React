import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
  return <h1>GM Tuts .. !!</h1>
}

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      topics : ['React','Webpack','Angular','Angular2']
    }
  }

  render(){
    return (
      <div className="Test">
        <Title />
        {this.state.topics.map((topic,index) => {
          return <p key={index} >{topic}</p>
        })}
      </div>
    )
  }
}
