import React, { Component } from 'react'
import './CommentUnlikeButton.css'
//import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'


export default class CommentUnlikeButton extends Component{
    
    static contextType = PostsListContext

    clickLike=()=>{
        console.log('We are UNliking the comment!')
        //want to make PUT request to remove userId from comment 'likedBy' string, then re-render CommentItem component
    }

    render(){
        return(  
            <>
            <p>•</p>
            <i onClick={this.clickLike} class="fas fa-thumbs-up commentLikeButton commentUnlikeButton"></i>
            </>
        )
    }
}