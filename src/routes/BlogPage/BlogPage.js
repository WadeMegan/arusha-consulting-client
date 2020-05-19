import React, { Component } from 'react'
import './BlogPage.css'
import { Link } from 'react-router-dom'
import PostsApiService from '../../services/posts-api-service'
import PostsList from '../../components/PostsList/PostsList'
import NavLinks from '../../components/NavLinks/NavLinks'
import fairgroundBanner from '../../images/fairgroundBanner.png'

export default class BlogPage extends Component{
    componentWillMount(){
        window.scrollTo(0, 0)
    }
        
    render(){
        return(
            <>
            <div className='fairgroundBannerContainer'>
                
                <div className='fairgroundBannerImgBox'></div>

                {/*<img className='fairgroundBannerImg' src={fairgroundBanner}></img>*/}

            </div>
            <section className='postsListSection'>
                <h1>ALL BLOG POSTS</h1>
                <PostsList/>
            </section>
            <footer >
            <h3>Copyright 2020 - Arusha Consulting</h3>
                <p>Fairground and Fairground Assets are powered by Arusha Consulting, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
                <p>For any questions or comments, please contact Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a></p>
            </footer>
            </>
        )
    }
}