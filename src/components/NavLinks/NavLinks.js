import React, { Component } from 'react'
import './NavLinks.css'
import { Link } from 'react-router-dom'

export default class NavLinks extends Component{
        
    render(){
        
        return(    
            <div className='navLinks'>
                <p className='indivNavLink'>HOME</p>
                <p className='indivNavLink'>ABOUT</p>
                <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                <Link className='indivNavLink' to='/fairground/assets'>FAIRGROUND</Link>
                <p className='indivNavLink'>VIDEOS</p>
                <p className='indivNavLink'>REACH OUT</p>
            </div>   
        )
    }
}