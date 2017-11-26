import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div>
            <h1 className="inline">GM Tuts .. !!</h1>
            <h1 className="inline"><Link to="/contactus">Contact us</Link></h1>
            <h1 className="inline"><Link to="/">App</Link></h1>
        </div>
      )
    }
  }