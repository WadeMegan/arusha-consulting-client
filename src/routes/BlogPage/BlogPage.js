import React, { Component } from 'react'
import './BlogPage.css'
import { Link } from 'react-router-dom'
import PostsApiService from '../../services/posts-api-service'
import PostsList from '../../components/PostsList/PostsList'
import NavLinks from '../../components/NavLinks/NavLinks'

export default class BlogPage extends Component{
        
    render(){
        return(
            <>
            <div className='heroBanner'>
                <div className='heroText'>
                    <nav>
                        <div className='title'>
                            <h1>Fairground Assets</h1>
                            <h2>By Arusha Consulting</h2>
                        </div>
                        <NavLinks/>
                    </nav>
                    
                    <div className='heroMessage'>
                        <p>FAIRGROUND <br/> BLOG</p>
                    </div>
                    
                </div>
                <div className='heroImageNav'>
                    <div className='heroOverlay'>
                    </div>
                </div>
            </div>
            <section className='postsListSection'>
                <PostsList/>
            </section>
            <footer >
                <p>Footer with whatever you want in it.</p>
            </footer>
            </>
        )
    }
}