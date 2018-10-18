import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Appointment from './components/Appointment'
import Payments from './components/Payments'
import Procedures from './components/Procedures'
import DentalExamParagraph from './components/DentalExam'
import DentalCleaningParagraph from './components/DentalCleaning'
import DigitalXRaysParagraph from './components/DigitalXrays'
import PanoramicXRaysParagraph from './components/PanoramicXRays'
import FlourideTreatmentParagraph from './components/FlourideTreatment'
import SealantsParagraph from './components/Sealants'
import HomeCareParagraph from './components/HomeCare'
import CompositeFillingsParagraph from './components/CompositeFillings'
import DentalImplantsParagraph from './components/DentalImplants'
import PorcelainCrownsParagraph from './components/PorcelainCrowns'
import PorcelainFixedBridgesParagraph from './components/PorcelainBridges'
import DenturesParagraph from './components/Dentures'
import RootCanalParagraph from './components/RootCanal'
import TeethWhiteningParagraph from './components/TeethWhitening'
import PeriodontalDiseaseParagraph from './components/PeriodontalDisease'
import MaintenanceParagraph from './components/Maintenance'

class Routes extends Component {

    render(){

        return(
            <div>
                <Switch>
                    
                    <Route component={ Home } exact path="/"/>
                    <Route component={ About } path="/About"/>
                    <Route component={ Appointment } path="/Appointment"/>
                    <Route component={ Payments } path="/Payments"/>
                    <Route component={ Procedures } exact path="/Procedures"/>
                    <Route component={ DentalExamParagraph }  path="/Procedures/DentalExam"/>
                    <Route component={ DentalCleaningParagraph } path="/Procedures/DentalCleaning"/>
                    <Route component={ DigitalXRaysParagraph } path="/Procedures/DigitalXRays"/>
                    <Route component={ PanoramicXRaysParagraph } path="/Procedures/PanoramicXRays"/>
                    <Route component={ FlourideTreatmentParagraph } path="/Procedures/FlourideTreatment"/>
                    <Route component={ SealantsParagraph } path="/Procedures/Sealants"/>
                    <Route component={ HomeCareParagraph } path="/Procedures/HomeCare"/>
                    <Route component={ CompositeFillingsParagraph } path="/Procedures/CompositeFillings"/>
                    <Route component={ DentalImplantsParagraph } path="/Procedures/DentalImplants"/>
                    <Route component={ PorcelainCrownsParagraph } path="/Procedures/PorcelainCrowns"/>
                    <Route component={ PorcelainFixedBridgesParagraph } path="/Procedures/PorcelainFixedBridges"/>
                    <Route component={ DenturesParagraph } path="/Procedures/Dentures"/>
                    <Route component={ RootCanalParagraph } path="/Procedures/RootCanal"/>
                    <Route component={ TeethWhiteningParagraph } path="/Procedures/TeethWhitening"/>
                    <Route component={ PeriodontalDiseaseParagraph } path="/Procedures/PeriodontalDisease"/>
                    <Route component={ MaintenanceParagraph } path="/Procedures/Maintenance"/>
                    

                </Switch>    
            </div>    
        )
    }
}

export default Routes;