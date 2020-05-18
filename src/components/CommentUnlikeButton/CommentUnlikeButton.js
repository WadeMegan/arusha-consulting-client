import React, { Component } from 'react'
import './CommentUnlikeButton.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
//import CommentForm from '../../components/CommentForm/CommentForm'
//import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'
import UsersService from '../../services/users-service'


export default class CommentUnlikeButton extends Component{
    
    static contextType = PostsListContext

    clickLike=()=>{
        console.log('We are UNliking the comment!')
        
        
        CommentsApiService.deleteLike(this.props.comment.sys.id, UsersService.getUserId())
            .then((res)=>{console.log(res)
                
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
            <i onClick={this.clickLike} class="fas fa-thumbs-up commentLikeButton commentUnlikeButton"></i>
            </>
        )
    }
}