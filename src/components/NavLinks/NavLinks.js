import React, { Component } from 'react'
import './NavLinks.css'
import { Link } from 'react-router-dom'

export default class NavLinks extends Component{
    
    state={
        menuOpen:false,
    }

    handleBoxToggle=()=>{
        console.log('testing hover')
        this.setState({
            menuOpen: true /*!this.state.menuOpen*/
        })
    }

    handleToggleOff=()=>{
        this.setState({
            menuOpen: false /*!this.state.menuOpen*/
        })
    }

    render(){
        return(   
            <>
            <div className={`dropdown${this.state.menuOpen ? " show" : ""}`} onMouseEnter={this.handleBoxToggle} onMouseLeave={this.handleToggleOff}>
                <button className='dropdownButton' onClick={()=>{this.setState({menuOpen:true})}} >MENU</button>
                <div className='navLinksDropdown'>
                    {/*<p className='indivNavLink'>HOME</p>*/}
                    <Link to='/' onClick={()=>{this.setState({menuOpen:false})}}className='indivNavLink'>HOME</Link>
                    <Link to='/about' onClick={()=>{this.setState({menuOpen:false})}}className='indivNavLink'>ABOUT</Link>
                    <Link onClick={()=>{this.setState({menuOpen:false})}}className='indivNavLink' to='/blog'>BLOG</Link>
                    <Link onClick={()=>{this.setState({menuOpen:false})}} className='indivNavLink' to='/assets'>ASSETS</Link>
                    <Link onClick={()=>{this.setState({menuOpen:false})}}className='indivNavLink' to='/contact'>STAY IN TOUCH</Link>

                    {/*<p className='indivNavLink'>REACH OUT</p>*/}
                </div> 
                {/*this.renderDropdownLinks()*/}
            </div> 
            <div className='navLinks'>
                {/*<p className='indivNavLink'>HOME</p>*/}
                <Link to='/' className='indivNavLink'>HOME</Link>
                <Link to='/about' className='indivNavLink'>ABOUT</Link>
                <Link className='indivNavLink' to='/blog'>BLOG</Link>
                <Link className='indivNavLink' to='/assets'>ASSETS</Link>
                <Link className='indivNavLink' to='/contact'>STAY IN TOUCH</Link>
                {/*<p className='indivNavLink'>REACH OUT</p>*/}
            </div>
            </>
        )
    }
}