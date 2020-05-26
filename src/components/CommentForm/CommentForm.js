import React, { Component } from 'react'
import './CommentForm.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import Google from '../Google/Google'
import Facebook from '../Facebook/Facebook'
import UsersService from '../../services/users-service'
import { Link } from 'react-router-dom'


export default class CommentForm extends Component{
    
    static contextType = PostsListContext

    state={
        publishedComment:null,
        loggedIn:false,
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { content } = ev.target

        let postId = this.context.currentPost.sys.id

        let date = new Date().toISOString()

        CommentsApiService.postComment(postId, UsersService.getName(), content.value, date, UsersService.getProfileImg(), this.props.replyingTo)
            .then((res)=>{
                content.value=''
                CommentsApiService.publishComment(res.sys.id)
                    .then(()=>{
                        this.props.commentAdded()
                    })
                    .catch(this.context.setError)
                this.setState({
                    publishedComment: `${res.sys.id}`
                })
            })
            .catch(this.context.setError)

    }

    componentDidMount=()=>{
        this.context.clearError()
    }

    renderUserProfileImg=()=>{
        if(UsersService.getProfileImg()){
            return(
                <img className='userImg' src={UsersService.getProfileImg()} alt='user profile'/> 
            )
        }

    }

    signOut=()=>{
        UsersService.clearEmail()
        UsersService.clearName()
        UsersService.clearProfileImg()
        UsersService.clearUserId()
        this.setState({
            loggedIn:false
        })
        this.props.handleSignout()
    }

    handleSignin=()=>{

        this.setState({loggedIn:true})
        this.props.handleSignin()

    }

    renderLogoutLink=()=>{
        if(this.props.onThread===false){
            return(
                <button className='logoutButton' onClick={this.signOut}>Sign Out</button>
            )
        }
    }

    renderCommentForm=()=>{
        if(UsersService.getName()){
            return(
                <div className='commentItem'>
                    <div className='commentImg'>
                        {this.renderUserProfileImg()}
                        {this.renderLogoutLink()}
                    </div>
                    <form className='commentForm' onSubmit={this.handleSubmit}>
                        <div>
                            <textarea className='inputArea' rows={3} name='content' id='content' required='require' placeholder='Join the conversation...'/>
                        </div>
                        <input className='submitCommentButton' type='submit' value='Submit'/>
                    </form> 
                </div>
            )
        }
        else{
            return(
                <div className='socialMediaSigninBox'>
                    <p>Login to Join the Conversation</p>
                    <div className='signinButtonBox'>
                        <Google onSuccess={this.handleSignin}
                        />
                        <Facebook onSuccess={this.handleSignin}
                        />
                    </div>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    
                </div> 
            )
            
        }
    }

    render(){

        return(    
            <div className='commentFormContainer'>
                {this.renderCommentForm()}
            </div>
        )
    }
}