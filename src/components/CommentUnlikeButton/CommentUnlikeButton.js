import React, { Component } from 'react'
import './CommentUnlikeButton.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'


export default class CommentUnlikeButton extends Component{
    
    static contextType = PostsListContext

    clickLike=()=>{
        console.log('We are UNliking the comment!')
        
        
        CommentsApiService.deleteLike(this.props.comment.sys.id, this.context.usersId)
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
            <i onClick={this.clickLike} class="fas fa-thumbs-up commentLikeButton commentUnlikeButton"></i>
            </>
        )
    }
}