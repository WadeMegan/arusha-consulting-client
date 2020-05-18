import React, { Component } from 'react'
import './CommentLikeButton.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'
import UsersService from '../../services/users-service'



export default class CommentLikeButton extends Component{
    
    static contextType = PostsListContext

    clickLike=()=>{
        console.log('We are liking the comment!')
        //want to make PUT request to add userId to comment 'likedBy' string, then re-render CommentItem component
        
        CommentsApiService.postLike(this.props.comment.sys.id, UsersService.getUserId(), this.context.currentPost.sys.id)
            .then((res)=>{
                
                CommentsApiService.getLikesByPostId(this.context.currentPost.sys.id)
                    .then(res=>{
                        this.context.setCurrentLikesList(res)
                        //handle state change
                        this.props.handleLikeButtonClicked()
                    })
                    .catch(this.context.setError)
                
            })
            .catch(this.context.setError)
        
    }

    componentDidMount=()=>{
        this.context.clearError()
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