import React from 'react';
import { Header } from '../component/Header';
import { App } from '../component/App';
import { Detail } from '../component/Detail';
import { Contactus } from '../component/Contactus';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class Routes extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Header}/>
                        <Switch>
                            <Route path="/app" component={App}/>
                            <Route path="/detail" component={Detail}/>
                            <Route path="/contactus" component={Contactus}/>
                            <Redirect to="/app"/>
                        </Switch>
                </div>
            </BrowserRouter>
        )
    }
}