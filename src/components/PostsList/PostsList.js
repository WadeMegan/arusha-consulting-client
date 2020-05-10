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
            .then(res=>{
                this.context.setPostsList(res.items)
                this.context.setAssetsList(res.includes.Asset)
            })
            .catch(this.context.setError)

        
    }

    componentDidMount=()=>{
        this.context.clearError()
    }

    renderPosts=()=>{


        if(this.context.postsList.length !== 0){
            
            let posts = this.context.postsList

            let postItems = posts.map(post=>{
                return (

                    <PostItem key={post.sys.id} post={post}/>
                    
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