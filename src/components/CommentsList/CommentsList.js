import React, { Component } from 'react'
import './CommentsList.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentReplyThread from '../CommentReplyThread/CommentReplyThread'
import CommentItem from '../CommentItem/CommentItem'
import Facebook from '../Facebook/Facebook'
import Google from '../Google/Google'


export default class CommentsList extends Component{
    
    static contextType = PostsListContext

    state={
        commentAdded:false,
        replyOpen: false
    }

    componentWillMount() {

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

        /*CommentsApiService.postComment(this.context.currentPost.id)
            .then(res=>console.log(res))
            .catch()*/
        
    }


    renderComments=()=>{

        //console.log(this.context.commentsList)

        if(this.context.commentsList){
            
            let comments = this.context.commentsList

            let commentsItems = comments.map(comment=>{
                
                if(!comment.fields.replyingTo){
                    /*let date = new Date(comment.fields.date)
                    let dateString = date.toString()
                    let splitDate = dateString.split(' ')
                    let month = splitDate[1]
                    let day = splitDate[2]
                    let year = splitDate[3]
                    let fullDate=`${month} ${day}, ${year}`.toUpperCase()*/
                    
                    return (
                        /*<div key={comment.sys.id}>
                            <div className='commentItem'>
                                <p>{comment.fields.username.toUpperCase()}</p>
                                <p>{fullDate}</p>
                                <p>{comment.fields.content}</p>
                                <button onClick={this.openReply} className='replyButton'>Reply</button>
                            </div>
                            <CommentReplyThread replyOpen={this.state.replyOpen} replyingId={comment.sys.id}/>
                        </div>*/
                        <CommentItem key={comment.sys.id} comment={comment} />
                        
                    )
                }
                
            })
            
            return(
                <>
                {commentsItems}
                </>
            )
        }

    }

    openReply=()=>{
        this.setState({
            replyOpen:true
        })
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
            .catch()
    }


    render(){
        return(    
            <section className='commentsSection'>
                <div className='commentIntroBox'>
                    <h2>The Discussion</h2>
                    <p>Always with curiosity, never with judgment.</p>
                </div>
                <CommentForm commentAdded={this.commentAdded}/>
                {this.renderComments()}
            </section>     
        )
    }
}