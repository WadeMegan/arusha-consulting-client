import React, { Component } from 'react'
import './CommentLikeButton.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'


export default class CommentLikeButton extends Component{
    
    static contextType = PostsListContext

    clickLike=()=>{
        console.log('We are liking the comment!')
        //want to make PUT request to add userId to comment 'likedBy' string, then re-render CommentItem component
        
        CommentsApiService.postLike(this.props.comment.sys.id, this.context.usersId, this.context.currentPost.sys.id)
            .then((res)=>{
                
                CommentsApiService.getLikesByPostId(this.context.currentPost.sys.id)
                    .then(res=>{
                        this.context.setCurrentLikesList(res)
                        //handle state change
                        this.props.handleLikeButtonClicked()
                    })
                    .catch()
                
            })
            .catch()
        
    }

    render(){
        return(  
            <>
                <p>•</p>
                <i onClick={this.clickLike} class="fas fa-thumbs-up commentLikeButton commentLikeButton"></i>
            </>
        )
    }
}