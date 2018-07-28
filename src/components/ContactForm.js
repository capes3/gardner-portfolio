import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'

import 'react-datepicker/dist/react-datepicker.css';




class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName:'',
            lastName:'',
            startDate:moment(),
            email:'',
            message:''

        }

        this.handleFirstChange =this.handleFirstChange.bind(this)
        this.handleLastChange =this.handleLastChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)

        this.handleSubmit =this.handleSubmit.bind(this)
  
    }

    handleFirstChange(event) {
        this.setState({firstName: event.target.value})
    }

    handleLastChange(event) {
        this.setState({lastName: event.target.value})
    }

    handleEmailChange(event){
        this.setState({email: event.target.value})
    }

    handleDateChange(date){
        this.setState({startDate: date})
    }

    handleMessageChange(event){
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        console.log(this.state)
        console.log(this.state.startDate._d);
        event.preventDefault();
        
        axios.post('/contact', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            startDate: this.state.startDate._d,
            email: this.state.email,
            message: this.state.message
        })
        .then(function (response){
            alert(response)
        })
        .catch(function(error){
            alert(error)
        })
      }



    render(){
        return(
            <form  className="homeContact" onSubmit={this.handleSubmit}>
                <h1>Contact Us</h1>
                <label>
                    <input className="contactField" type="text" placeholder="First" value={this.state.firstName} onChange={this.handleFirstChange}/>
                 </label>
                 <label>
                    <input className="contactField" type="text" placeholder="Last" value={this.state.lastName} onChange={this.handleLastChange}/>
                 </label>
                 <label>
                     <input className="contactField"type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                {/* <DatePicker 
                
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                
                /> */}
                <label>
                    <textarea className="messageContactField" type="text" placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                </label>
                <span/>
                <input className="submitButton" type="submit" value="Submit"/>

            </form>
        )
    }
}

export default  ContactForm