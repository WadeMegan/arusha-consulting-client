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

    componentDidMount=()=>{
        this.context.clearError()
    }

    renderUserProfileImg=()=>{
        if(UsersService.getProfileImg()){
            return(
                <img className='userImg' src={UsersService.getProfileImg()}/> 
            )
        }
        /*else{
            return(
                <div className='userImg customIcon'><p>{this.context.usersName.charAt(0).toUpperCase()}</p></div>
            )
        }*/
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
                        {/*<div>
                            <label htmlFor='username'>Username *</label>
                            <input className='inputArea' type="text" name='username' id='username' required='require'/>
                        </div>*/}
                        <div>
                            {/*<label htmlFor='content'>JOIN THE CONVERSATION</label>*/}
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
                            //handleSignin={this.props.handleSignin}
                        />
                    </div>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    
                </div> 
            )
            
        }
    }

    render(){

        //console.log(this.context.usersName, this.context.usersEmail)

        return(    
            <div className='commentFormContainer'>
                {this.renderCommentForm()}
            </div>
        )
    }
}