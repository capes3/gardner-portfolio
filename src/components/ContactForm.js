import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';




class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName:'',
            lastName:'',
            startDate:moment(),
            email:''

        }

        this.handleFirstChange =this.handleFirstChange.bind(this)
        this.handleLastChange =this.handleLastChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)

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

    handleSubmit(event) {
        console.log(this.state)
        console.log(this.state.startDate._d);
        event.preventDefault();
      }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    First:
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstChange}/>
                 </label>
                 <label>
                 Last:
                    <input type="text" value={this.state.lastName} onChange={this.handleLastChange}/>
                 </label>
                 <label>
                     Email:
                     <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                </label>
                <DatePicker 
                
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                
                />
                <input type="submit" value="Submit"/>

            </form>
        )
    }
}

export default  ContactForm