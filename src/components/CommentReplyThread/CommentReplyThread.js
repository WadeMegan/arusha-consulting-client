import React, { Component } from 'react'
import './CommentReplyThread.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import CommentForm from '../CommentForm/CommentForm'
import CommentItem from '../CommentItem/CommentItem'


export default class CommentReplyThread extends Component{
    
    static contextType = PostsListContext

    /*componentWillMount() {

       CommentsApiService.getAllComments(this.context.currentPost.id)
            .then(res=>{
                let commentsList = res.items.filter(comment=>
                    comment.fields.postId===this.context.currentPost.sys.id
                )
                this.context.setCommentsList(commentsList)
            })
            .catch()
        
    }*/

    renderReplies=()=>{

        //console.log(this.context.commentsList)
        
        let replyItems = this.context.commentsList.map(comment=>{
                
            if(comment.fields.replyingTo && comment.fields.replyingTo===this.props.replyingId){

                console.log(comment)
                let date = new Date(comment.fields.date)
                let dateString = date.toString()
                let splitDate = dateString.split(' ')
                let month = splitDate[1]
                let day = splitDate[2]
                let year = splitDate[3]
                let fullDate=`${month} ${day}, ${year}`.toUpperCase()
                
                return (
                    
                    <CommentItem comment={comment}/>

                    /*<div className='commentItem'>
                        <p>{comment.fields.username.toUpperCase()}<span> • {fullDate}</span></p>
                        <p>{comment.fields.content}</p>
                        <div className='commentInteractionBox'>
                            <em>1 Like</em>
                            <p>•</p>
                            <i class="fas fa-thumbs-up"></i>
                        </div>
                    </div>    */
                    

                )
            }
        })


        return(
            <>
            {replyItems}
            </>
        )
    }

    renderReplyForm=()=>{
        if(this.props.replyOpen===true){
            return(
                <CommentForm commentAdded={this.commentAdded} replyingTo={this.props.replyingId}/>
            )
        }
    }
    

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
            .catch(this.context.setError)
    }


    componentDidMount=()=>{
        this.context.clearError()
    }
    
    render(){


        return(    
            <div className='commentReplyThread'>
                {this.renderReplies()}
                {this.renderReplyForm()}
            </div>     
        )
    }
}