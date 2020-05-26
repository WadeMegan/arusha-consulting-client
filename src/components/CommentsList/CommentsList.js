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
        replyOpen: false,
        loggedIn: false,
    }

    componentWillMount() {

        if(this.context.currentPost && this.context.currentPost.sys){
       CommentsApiService.getAllComments(this.context.currentPost.sys.id)
            .then(res=>{
  
                
                let commentsList = res.items.filter(comment=>
                    comment.fields.postId===this.context.currentPost.sys.id
                )
                this.context.setCommentsList(commentsList)
            })
            .catch(this.context.setError)
        }        
    }

    componentDidMount=()=>{
        this.context.clearError()
    }


    renderComments=()=>{

        if(this.context.commentsList){
            
            let comments = this.context.commentsList
            let commentsItems

            if(comments.length===0){
                commentsItems = <p>Be the first to comment.</p>
                
            }
            else{

                
                commentsItems = comments.map(comment=>{
                
                    if(!comment.fields.replyingTo){
                        
                        return (
                            <CommentItem key={comment.sys.id} comment={comment} />
                            
                        )
                    }
                    
                })

            }
            
            
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

        CommentsApiService.getAllComments(this.context.currentPost.id)
            .then(res=>{
                let commentsList = res.items.filter(comment=>
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

    handleSignin=()=>{

        this.setState({
            loggedIn: true
        })
    }

    handleSignout=()=>{

        this.setState({
            loggedIn: false
        })
    }

    render(){
        return(    
            <section className='commentsSection'>
                <div className='commentIntroBox'>
                    <h2>The Discussion</h2>
                    <p>Always with curiosity, never with judgment. Please don't feed the trolls.</p>
                </div>
                <CommentForm onThread={false} commentAdded={this.commentAdded} handleSignin={this.handleSignin} handleSignout={this.handleSignout}/>
                {this.renderComments()}
            </section>     
        )
    }
}