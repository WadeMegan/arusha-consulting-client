import React, { Component } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
//import PostsApiService from '../../services/posts-api-service'
import arushaMeetHeatherLogo from '../../images/arushaMeetHeatherLogo.jpg'


export default class HomePage extends Component{
      
    componentWillMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <>
    
            <section className='homePageSection'>
                <img className='homePageImage' src={arushaMeetHeatherLogo} alt='Arusha Logo'/>
                {/*<h1>About Arusha</h1>*/}
                <p>Arusha Consulting is a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives.</p>
                <p>Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups.</p>
            </section>

            <footer className='homePageFooter'>
                <p><Link to='/blog'>Fairground</Link> and <Link to='/assets'>Fairground Assets</Link> are powered by Arusha Consulting.</p>
                <p>Questions? Comments? Reach out to Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a>.</p>
                <p>Reach out to learn more about 1:1 coaching, workshops, and consulting offerings.</p>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
                
            </footer>
            </>
        )
    }
}