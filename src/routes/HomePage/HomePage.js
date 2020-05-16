import React, { Component } from 'react'
import './HomePage.css'
//import { Link } from 'react-router-dom'
//import PostsApiService from '../../services/posts-api-service'
import arushaMeetHeatherLogo from '../../images/arushaMeetHeatherLogo.jpg'


export default class HomePage extends Component{
        
    render(){
        return(
            <>
    
            <section className='homePageSection'>
                <img className='homePageImage' src={arushaMeetHeatherLogo}/>
                <div className='whatIsArushaBox'>
                    <h1>ABOUT ARUSHA</h1>
                    <p>Arusha Consulting is a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives.</p>
                    <p>Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups.</p>
                </div>
            </section>

            <footer >
            <h3>Copyright 2020 - Arusha Consulting</h3>
                <p>Fairground and Fairground Assets are powered by Arusha Consulting, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
                <p>For any questions or comments, please contact Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a></p>
                <p>Reach out to learn more about 1:1 coaching, workshops, and consulting offerings.</p>
            </footer>
            </>
        )
    }
}