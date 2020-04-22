import React, { Component } from 'react'
import './CommentsList.css'
import CommentsApiService from '../../services/comments-api-service'
import PostsListContext from '../../contexts/PostsListContext'


export default class CommentsList extends Component{
    
    static contextType = PostsListContext

    componentWillMount() {

       CommentsApiService.getCommentsByPostId(this.context.currentPost.id)
            .then(this.context.setCommentsList)
            .catch()

        /*CommentsApiService.postComment(this.context.currentPost.ID)
            .then(res=>console.log(res))
            .catch()*/
        
    }


    createMarkup=(content)=>{
        if(content){
            return {__html: `${content}`}
        }
    }

    renderContent = (content) => {
        let html = this.createMarkup(content)

        if(content){
            return(
                <div className='postContent' dangerouslySetInnerHTML={html}/>
            )
        }
    }

    renderComments=()=>{


        if(this.context.commentsList){
            
            let comments = this.context.commentsList

            let commentsItems = comments.map(comment=>{
                
                let date = new Date(comment.date)
                let dateString = date.toString()
                let splitDate = dateString.split(' ')
                let month = splitDate[1]
                let day = splitDate[2]
                let year = splitDate[3]
                let fullDate=`${month} ${day}, ${year}`.toUpperCase()
                
                return (

                    <div className='commentItem' key={comment.id}>
                        <img src={comment.author_avatar_urls[48]} alt='user avatar'></img>
                        <p>{comment.author_name.toUpperCase()}</p>
                        <p>{fullDate}</p>
                        {this.renderContent(comment.content.rendered)}
                        
                    </div>
                    
                    
                )
            })
            
            return(
                <>
                {commentsItems}
                </>
            )
        }

    }


    render(){
        console.log(this.context.commentsList)
        return(    
            <>
            <p>Comments Section</p>
            {this.renderComments()}
            </>     
        )
    }
}