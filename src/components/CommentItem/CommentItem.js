import React, { Component } from 'react'
import './CommentItem.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'
import CommentLikeButton from '../CommentLikeButton/CommentLikeButton'
import CommentUnlikeButton from '../CommentUnlikeButton/CommentUnlikeButton'

export default class CommentItem extends Component{
    
    static contextType = PostsListContext

    state={
        commentAdded:false,
        replyOpen: false,
    }

    /*componentWillMount() {

       CommentsApiService.getAllComments(this.context.currentPost.id)
            .then(res=>{
                console.log(res)
                
                let commentsList = res.items.filter(comment=>
                    //console.log(this.context.currentPost.sys.id)
                    comment.fields.postId===this.context.currentPost.sys.id
                )
                this.context.setCommentsList(commentsList)
            })
            .catch()

        CommentsApiService.postComment(this.context.currentPost.id)
            .then(res=>console.log(res))
        .catch()
        
    }*/


    /*renderComments=()=>{

        //console.log(this.context.commentsList)

        if(this.context.commentsList){
            
            let comments = this.context.commentsList

            let commentsItems = comments.map(comment=>{
                
                if(!comment.fields.replyingTo){
                    let date = new Date(comment.fields.date)
                    let dateString = date.toString()
                    let splitDate = dateString.split(' ')
                    let month = splitDate[1]
                    let day = splitDate[2]
                    let year = splitDate[3]
                    let fullDate=`${month} ${day}, ${year}`.toUpperCase()
                    
                    return (
                        <div key={comment.sys.id}>
                            <div className='commentItem'>
                                <p>{comment.fields.username.toUpperCase()}</p>
                                <p>{fullDate}</p>
                                <p>{comment.fields.content}</p>
                                <button onClick={this.openReply} className='replyButton'>Reply</button>
                            </div>
                            <CommentReplyThread replyOpen={this.state.replyOpen} replyingId={comment.sys.id}/>
                        </div>
                        
                    )
                }
                
            })
            
            return(
                <>
                {commentsItems}
                </>
            )
        }

    }*/

    openReply=()=>{
        if(this.state.replyOpen==false){
            this.setState({
                replyOpen:true
            })
        } else{
            this.setState({
                replyOpen:false
            })
        }
        
    }

/*
    commentAdded=()=>{
        console.log('commentAdded ran')
        CommentsApiService.getAllComments(this.context.currentPost.id)
            .then(res=>{
                let commentsList = res.items.filter(comment=>
                    //console.log(this.context.currentPost.sys.id)
                    comment.fields.postId===this.context.currentPost.sys.id
                )
                this.context.setCommentsList(commentsList)

                this.setState({
                    commentAdded:true
                })
            })
            .catch()
    }*/

    renderUserProfileImg=()=>{
        if(this.props.comment.fields.profileImg){
            return(
                <img className='userImg' src={this.props.comment.fields.profileImg}/> 
            )
        }
        else{
            return(
                <div className='userImg customIcon'><p>{this.props.comment.fields.username.charAt(0).toUpperCase()}</p></div>
            )
        }
    }

    renderReplyButton=()=>{
        if(!this.props.comment.fields.replyingTo){
            return(
                <>
                <button onClick={this.openReply} className='replyButton'>Reply</button>
                <p>•</p>
                </>
            )
        }
    }

    renderLikeButtons=()=>{
        if(this.context.userLoggedIn===true){
            //comment is liked by user
            if(this.props.comment.fields.likedBy && this.props.comment.fields.likedBy.split(',').find(id=> id===this.context.usersId)){
                return(
                    <CommentUnlikeButton/>
                )
            }
            else{
                return(
                    <CommentLikeButton comment={this.props.comment} commentVersion={this.props.comment.sys.revision}/>
                )
            }
            
        }
    }

    render(){

        let date = new Date(this.props.comment.fields.date)
        let dateString = date.toString()
        let splitDate = dateString.split(' ')
        let month = splitDate[1]
        let day = splitDate[2]
        let year = splitDate[3]
        let fullDate=`${month} ${day}, ${year}`.toUpperCase()
        
        return(  
            <>  
            <div className='commentItem'>
                <div className='commentImg'>
                   {this.renderUserProfileImg()}
                </div>
                
                <div className='commentContent'>
                    <p>{this.props.comment.fields.username.toUpperCase()}<span> • {fullDate}</span></p>
                    <p>{this.props.comment.fields.content}</p>
                    <div className='commentInteractionBox'>
                        {this.renderReplyButton()}
                        <em>1 Like</em>
                        {this.renderLikeButtons()}
                    </div>
                </div>
                

            </div>    
            <CommentReplyThread replyOpen={this.state.replyOpen} replyingId={this.props.comment.sys.id}/>
            </>
        )
    }
}