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
                    <Link to='/about'> <img className='navLogoImg' src={navLogo}/></Link>
                </div>
            
                <div className='navBarLinks'>
                    <Link to='/about' className='indivNavLink'>ABOUT</Link>
                    <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                    <Link className='indivNavLink' to='/fairground-assets'>FAIRGROUND</Link>
            </div>   
            </nav>
        )
    }
}