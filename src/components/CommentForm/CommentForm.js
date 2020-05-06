import React, { Component } from 'react'
import './CommentForm.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import Google from '../Google/Google'
import Facebook from '../Facebook/Facebook'


export default class CommentForm extends Component{
    
    static contextType = PostsListContext

    state={
        publishedComment:null
    }


    componentWillMount() {

       /*CommentsApiService.getAllComments(this.context.currentPost.id)
            .then(res=>{
                let commentsList = res.items.filter(comment=>
                    comment.fields.postId===this.context.currentPost.sys.id
                )
                this.context.setCommentsList(commentsList)
            })
            .catch()

        CommentsApiService.postComment(this.context.currentPost.id)
            .then(res=>console.log(res))
            .catch()*/
        
    }


    /*renderComments=()=>{

        //console.log(this.context.commentsList)

        if(this.context.commentsList){
            
            let comments = this.context.commentsList

            let commentsItems = comments.map(comment=>{
                
                let date = new Date(comment.fields.date)
                let dateString = date.toString()
                let splitDate = dateString.split(' ')
                let month = splitDate[1]
                let day = splitDate[2]
                let year = splitDate[3]
                let fullDate=`${month} ${day}, ${year}`.toUpperCase()
                
                return (

                    <div className='commentItem' key={comment.sys.id}>
                        <p>{comment.fields.username.toUpperCase()}</p>
                        <p>{fullDate}</p>
                        <p>{comment.fields.content}</p>
                        
                    </div>
                    
                    
                )
            })
            
            return(
                <>
                {commentsItems}
                </>
            )
        }

    }*/


    handleSubmit = ev => {
        ev.preventDefault()

        const { content } = ev.target

        let postId = this.context.currentPost.sys.id

        let date = new Date().toISOString()

        CommentsApiService.postComment(postId, this.context.usersName, content.value, date, this.context.usersProfileImg, this.props.replyingTo)
            .then((res)=>{
                content.value=''
                CommentsApiService.publishComment(res.sys.id)
                    .then(()=>{
                        this.props.commentAdded()
                    })
                    .catch()
                this.setState({
                    publishedComment: `${res.sys.id}`
                })
            })
            .catch()


        /*CommentsApiService.publishComment(this.state.publishedComment)
            .then()
            .catch()*/
        /*const { brand, why } = ev.target

        let userId = Number(UserService.getUserToken())



        RequestApiService.postNewComment(this.context.currentRequest.id, userId, brand.value, why.value)
            .then(()=>{
                brand.value=''
                why.value=''
                this.props.onSubmit()
            })
            .catch(this.context.setError)*/
    }

    renderCommentForm=()=>{
        if(this.context.userLoggedIn===true){
            return(
                <>
                <p>Comment Form</p>
                <form className='commentForm' onSubmit={this.handleSubmit} action="https://formsubmit.co/wademegan96@gmail.com" method="POST">
                    {/*<div>
                        <label htmlFor='username'>Username *</label>
                        <input className='inputArea' type="text" name='username' id='username' required='require'/>
                    </div>*/}
                    <div>
                        <label htmlFor='content'>Comment *</label>
                        <textarea className='inputArea' rows={3} name='content' id='content' required='require'/>
                    </div>
                    <input className='submitCommentButton' type='submit' value='Submit'/>
                </form> 
                </>
            )
        }
        else{
            return(
                <div>
                    <p>Please login to join the discussion:</p>
                    <Google/>
                    <Facebook/>
                </div> 
            )
            
        }
    }

    render(){

        //console.log(this.context.usersName, this.context.usersEmail)

        return(    
            <>
            {this.renderCommentForm()}
            </>
        )
    }
}