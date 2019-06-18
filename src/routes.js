import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/home/home';
import About from './components/about/about';
import Careers from './components/careers/careers';

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch >
                    <Route component={Home} exact path='/' />
                    <Route component={About} exact path='/about' />
                    <Route component={Careers} exact path='/careers' />

                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}