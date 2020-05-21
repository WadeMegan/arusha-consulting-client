import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks'
import navLogo from '../../images/navLogo.png'

export default class NavBar extends Component{
        
    render(){
        return(  
            <nav className='navBar'>
                <div className='navLogoLink'>
                    <Link to='/'> <img className='navLogoImg' src={navLogo} alt='Arusha Consulting Logo'/></Link>
                </div>
            
                <NavLinks/> 
            </nav>
        )
    }
}