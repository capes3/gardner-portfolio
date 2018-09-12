import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Appointment from './components/Appointment'
import Payments from './components/Payments'
import Procedures from './components/Procedures'

class Routes extends Component {

    render(){

        return(
            <div>
                <Switch>
                    
                    <Route component={ Home } exact path="/"/>
                    <Route component={ About } path="/About"/>
                    <Route component={ Appointment } path="/Appointment"/>
                    <Route component={ Payments } path="/Payments"/>
                    <Route component={ Procedures } path="/Procedures"/>

                </Switch>    
            </div>    
        )
    }
}

export default Routes;