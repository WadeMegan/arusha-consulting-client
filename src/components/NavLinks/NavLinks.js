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
                    <Link to='/about' className='indivNavLink'>ABOUT</Link>
                    <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                    <Link className='indivNavLink' to='/fairground-assets'>FAIRGROUND</Link>
                    {/*<p className='indivNavLink'>REACH OUT</p>*/}
                </div> 
            </div> 
            <div className='navLinks'>
                {/*<p className='indivNavLink'>HOME</p>*/}
                <Link to='/about' className='indivNavLink'>ABOUT</Link>
                <Link className='indivNavLink' to='/fairground'>BLOG</Link>
                <Link className='indivNavLink' to='/fairground-assets'>FAIRGROUND</Link>
                {/*<p className='indivNavLink'>REACH OUT</p>*/}
            </div>
            </>
        )
    }
}