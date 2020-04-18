import React, { Component } from 'react'
import './PostsList.css'
import PostsApiService from '../../services/posts-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import PostItem from '../PostItem/PostItem'
import { Container, Row, Col } from 'react-grid-system';

export default class PostsList extends Component{
    
    static contextType = PostsListContext

    componentWillMount() {

        PostsApiService.getPosts()
            .then(this.context.setPostsList)
            .catch(/*catch error*/)
        
    }

    renderPosts=()=>{

        if(this.context.postsList.length !== 0){
            
            let posts = this.context.postsList.posts

            let postItems = posts.map(post=>{
                return (
                    <PostItem key={post.ID} post={post}/>
                    
                )
            })
            
            return(
                <>
                {postItems}
                </>
            )
        }

    }
    
    render(){
        return(
            <>
            <div className='postsContainer'>
                {this.renderPosts()} 
            </div>
            
                       

            
            
            </>
        )
    }
}