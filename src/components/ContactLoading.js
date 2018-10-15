import React,{ Component } from 'react'

function ContactLoading(props){
    console.log(props)
    
    if(props.loader ===''){
        return null
        console.log(props.loader)
    }else if(props.loader ==='message sent'){
    
        return(
            <div className="container">
                    <div className="loader">
                        <div className="checkmark"></div>
                        
                    </div>
            </div>
        )
    }else if(props.loader==='error'){
        console.log(props.loader)
        return (
            <div>
            <div className="errorAlert">There was an error on our end. Please call or try again later.</div>
            </div>
        )
    }
    
}
    

export default ContactLoading