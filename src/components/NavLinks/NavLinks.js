import React, { Component } from 'react'
import './NavLinks.css'
import { Link } from 'react-router-dom'

export default class NavLinks extends Component{
        
    render(){
        return(   
            <>
            <div className='dropdown'>
                <button className='dropdownButton'>MENU</button>
                <div className='navLinksDropdown'>
                    {/*<p className='indivNavLink'>HOME</p>*/}
                    <Link to='/' className='indivNavLink'>HOME</Link>
                    <Link to='/about' className='indivNavLink'>ABOUT</Link>
                    <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                    <Link className='indivNavLink' to='/fairground-assets'>ASSETS</Link>
                    <Link className='indivNavLink' to='/contact'>STAY IN TOUCH</Link>

                    {/*<p className='indivNavLink'>REACH OUT</p>*/}
                </div> 
            </div> 
            <div className='navLinks'>
                {/*<p className='indivNavLink'>HOME</p>*/}
                <Link to='/' className='indivNavLink'>HOME</Link>
                <Link to='/about' className='indivNavLink'>ABOUT</Link>
                <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                <Link className='indivNavLink' to='/fairground-assets'>ASSETS</Link>
                <Link className='indivNavLink' to='/contact'>STAY IN TOUCH</Link>
                {/*<p className='indivNavLink'>REACH OUT</p>*/}
            </div>
            </>
        )
    }
}