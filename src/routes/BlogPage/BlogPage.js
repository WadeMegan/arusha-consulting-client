import React, { Component } from 'react'
import './BlogPage.css'
import { Link } from 'react-router-dom'
//import PostsApiService from '../../services/posts-api-service'
import PostsList from '../../components/PostsList/PostsList'
//import NavLinks from '../../components/NavLinks/NavLinks'
//import fairgroundBanner from '../../images/fairgroundBanner.png'

export default class BlogPage extends Component{
    componentWillMount(){
        window.scrollTo(0, 0)
    }
        
    render(){
        return(
            <>
            <div className='fairgroundBannerContainer' name='blogPage'>
                
                <div className='fairgroundBannerImgBox'></div>

                {/*<img className='fairgroundBannerImg' src={fairgroundBanner}></img>*/}

            </div>
            <section className='postsListSection'>
                <h1>ALL BLOG POSTS</h1>
                <PostsList/>
            </section>
            <footer >
                <p>Fairground and <Link to='/assets'>Fairground Assets</Link> are powered by <Link to="/">Arusha Consulting</Link>, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good.</p>
                <p><Link to='/assets'>Fairground Assets</Link> is a crowd-sourced database for those interested in deepening their
                understanding to make a positive difference when it comes to diversity, inclusion, equity,
                and social justice.</p>
                <p>Questions? Comments? Reach out to Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a>.</p>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
            </footer>
            </>
        )
    }
}