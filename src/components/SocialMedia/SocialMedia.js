import React, { Component } from 'react'
import './SocialMedia.css'

export default class SocialMedia extends Component{
        
    render(){
    
        return(    
            <div className="socialBar">
                <a target='_blank' href="https://www.facebook.com/arushaconsulting/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a target='_blank' href="https://www.linkedin.com/company/arusha-consulting-inc/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a target='_blank' href="https://www.instagram.com/arushaconsulting/" className="instagram"><i className="fab fa-instagram"></i></a>
            </div>        
        )
    }
}