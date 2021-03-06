import React, {Component} from 'react'
import axios from 'axios'
import ContactLoading from './ContactLoading';





class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName:'',
            firstNameError:'',
            lastName:'',
            lastNameError:'',
            email:'',
            emailError:'',
            message:'',
            messageError:'',
            showSuccess: ''
        }

        this.handleFirstChange =this.handleFirstChange.bind(this)
        this.handleLastChange =this.handleLastChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        // this.handleDateChange = this.handleDateChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.validate = this.validate.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        this.exitAlert = this.exitAlert.bind(this)

        
  
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

    // handleDateChange(date){
    //     this.setState({startDate: date})
    // }

    handleMessageChange(event){
        this.setState({message: event.target.value})
    }

    validate = () => {
        let isError= false;
        const errors= {
            firstNameError:'',
            lastNameError:'',
            emailError:'',
            messageError:''
        }
        if ((this.state.firstName.length < 2)||(this.state.firstName.length > 15) ) {
            isError= true;
            errors.firstNameError="Invalid First Name"
        }

        if ((this.state.lastName.length < 2)||(this.state.lastName.length > 15) ) {
            isError= true;
            errors.lastNameError="Invalid Last Name"
        }

        if(this.state.email.indexOf("@")=== -1){
            isError= true;
            errors.emailError="invalid email"
        }

        if ((this.state.message.length < 5)||(this.state.message.length > 1000 ) ) {
            isError= true;
            errors.messageError="Invalid Message"
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError
    }

    handleSubmit(event) {

        // console.log(this.state.startDate._d);
        event.preventDefault();
        const err = this.validate();
        const _this= this
        if(!err){
            //clear the form 
            this.setState({
                firstName:'',
                firstNameError:'',
                lastName:'',
                lastNameError:'',
                email:'',
                emailError:'',
                message:'',
                messageError:'',
            })
            axios.post('/contact',{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message
        }).then(function (response){
            if(response.status=== 200){
                _this.setState({
                    showSuccess:'message sent'
                })
            }
        }).catch(function (response){
            if(response.status !== 200){
                _this.setState({
                    showSuccess:'error'
                })
            }
        })
    }
}

exitAlert(event){
    this.setState({
        showSuccess:''
    })
}




       
      



    render(){
        return(
            <form  className="homeContact" onSubmit={this.handleSubmit}>
                <h1>Contact Us</h1>
                <ContactLoading loader={this.state.showSuccess} exit={this.exitAlert}/>

                <label className="textAreaHolder">
                    <input className="contactField" type="text" placeholder="First" value={this.state.firstName} onChange={this.handleFirstChange}/>
                    <span className="firstNameErrorText">{this.state.firstNameError}</span>
                 </label>
                 <label className="textAreaHolder">
                    <input className="contactField" type="text" placeholder="Last" value={this.state.lastName} onChange={this.handleLastChange}/>
                    <span className="lastNameErrorText">{this.state.lastNameError}</span>
                 </label>
                 <label className="textAreaHolder">
                     <input className="contactField"type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                     <span className="emailErrorText">{this.state.emailError}</span>
                </label>
                {/* <DatePicker 
                
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                
                /> */}
                <label className="textAreaHolder">
                    <textarea className="messageContactField" type="text" placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    <span className="messageErrorText">{this.state.messageError}</span>
                    
                </label>
                <span/>
                <input className="submitButton" type="submit" value="Submit"/>
            </form>
        )
    
    }
}

export default  ContactForm