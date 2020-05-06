import React, { Component } from 'react'
import './CommentLikeButton.css'
//import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'


export default class CommentLikeButton extends Component{
    
    static contextType = PostsListContext

    renderLikeButton=()=>{
        if(this.context.userLoggedIn===true){
            return(
                <>
                <p>•</p>
                <i onClick={this.clickLike} class="fas fa-thumbs-up commentLikeButton"></i>
                </>
            )
        }
    }

    userLoggedIn

    clickLike=()=>{
        console.log('clicked')
    }

    render(){
        return(  
            <>
            {this.renderLikeButton()}
            </>
        )
    }
}