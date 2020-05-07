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
        console.log(this.props.commentVersion)
        //want to make PUT request to add userId to comment 'likedBy' string, then re-render CommentItem component

        /*if(this.props.likedBy){
            console.log(this.props.likedBy)
        }
        else{
            
        }*/

        //commentId, username, date, content, postId, profileImg, replyingTo, likedBy, commentVersion

        CommentsApiService.updateLikedBy(this.props.comment.sys.id, this.props.comment.fields.username,this.props.comment.fields.date, this.props.comment.fields.content, this.props.comment.fields.postId, this.props.comment.fields.profileImg, this.props.comment.replyingTo, this.context.usersId, this.props.commentVersion)
            .then((res)=>{
                CommentsApiService.publishComment(this.props.comment.sys.id)
                    .then()
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