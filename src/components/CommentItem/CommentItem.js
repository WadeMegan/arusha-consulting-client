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
        likeClicked: false
    }

    handleLikeButtonClicked=()=>{
        this.setState({
            likeClicked:true
        })
    }

    componentWillMount(){

        console.log('will mount ran')
        
        CommentsApiService.getLikesByPostId(this.context.currentPost.sys.id)
            .then(res=>{
                this.context.setCurrentLikesList(res)
            })
            .catch()
        }

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
        if(this.context.currentLikesList){
            /*console.log('RenderLikeButtons RAN')

            let isCorrectComment = this.context.currentLikesList.find(like=>like.comment_id==this.props.comment.sys.id)
            console.log(isCorrectComment)*/

            /*let didUserLike =[]
            if(isCorrectComment && isCorrectComment.length!==0){
                didUserLike = isCorrectComment.find(like=>like.user_id==this.context.usersId)
            }
            */

            //console.log(didUserLike)

            let didUserLike = this.context.currentLikesList.filter(like=>like.user_id==this.context.usersId && like.comment_id==this.props.comment.sys.id)

            console.log(didUserLike)
            
            if(this.context.userLoggedIn===true){
                //comment is liked by user
                if(didUserLike.length!==0){
                    return(
                        <CommentUnlikeButton comment={this.props.comment} handleLikeButtonClicked={this.handleLikeButtonClicked}/>
                    )
                }
                else{
                    return(
                        <CommentLikeButton comment={this.props.comment} handleLikeButtonClicked={this.handleLikeButtonClicked}/>
                    )
                }
                
            }
        }
    }

    renderLikeCount=()=>{

        if(this.context.currentLikesList){
            let count=this.context.currentLikesList.filter(like=>like.comment_id==this.props.comment.sys.id)
            console.log(count)

            if(count.length===1){
                return(
                    <em>{count.length} Like</em>
                )
            } else{
                return(
                    <em>{count.length} Likes</em>
                )
            }

            
        }
        
    }

    render(){

        console.log(this.context.currentLikesList)

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
                        {this.renderLikeCount()}
                        {this.renderLikeButtons()}
                    </div>
                </div>
                

            </div>    
            <CommentReplyThread replyOpen={this.state.replyOpen} replyingId={this.props.comment.sys.id}/>
            </>
        )
    }
}