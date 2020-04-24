import React, { Component } from 'react'
import './IndividualPostPage.css'
import { Link } from 'react-router-dom'
import PostsListContext from '../../contexts/PostsListContext'
import PostsApiService from '../../services/posts-api-service'
import NavLinks from '../../components/NavLinks/NavLinks'
import CommentsList from '../../components/CommentsList/CommentsList'

export default class IndividualPostPage extends Component{

    static contextType = PostsListContext

    state={
        mediaUrl: null
    }

    componentWillMount() {

        window.scrollTo(0, 0)

        /*PostsApiService.getPostById(this.props.match.params.id)
            .then(res=>{
                this.context.setCurrentPost(res)
            
                PostsApiService.getPostFeaturedImage(res.featured_media)
                    .then(res=>{
                        this.setState({
                            mediaUrl: res.guid.rendered
                        })
                    })
                    .catch()
            
            })
            .catch())*/
        
    }

     renderImage=()=>{
 
             return(
                <img src={this.state.mediaUrl} className='featuredImgPost' alt='featured image'></img>
             )
 
         }        

    componentWillUnmount() {
        this.context.setCurrentPost([])
    }

    createMarkup=()=>{
        if(this.context.currentPost.content){
            return {__html: `${this.context.currentPost.content.rendered}`}
        }
    }

    renderContent = () => {
        let html = this.createMarkup()

        if(this.context.currentPost.content){
            return(
                <div className='postContent' dangerouslySetInnerHTML={html}/>
            )
        }
    }

    renderDate = () => {
        let date = new Date(this.context.currentPost.date)
        let dateString = date.toString()
        let splitDate = dateString.split(' ')
        let month = splitDate[1]

        if(month==='Jan'){
            month='January'
        }
        else if(month==='Feb'){
            month='February'
        }
        else if(month==='Mar'){
            month='March'
        }
        else if(month==='Apr'){
            month='April'
        }
        else if(month==='May'){
            month='May'
        }
        else if(month==='Jun'){
            month='June'
        }
        else if(month==='Jul'){
            month='July'
        }
        else if(month==='Aug'){
            month='August'
        }
        else if(month==='Sep'){
            month='September'
        }
        else if(month==='Oct'){
            month='October'
        }
        else if(month==='Nov'){
            month='November'
        }
        else if(month==='Dec'){
            month='December'
        }

        let day = splitDate[2]
        let year = splitDate[3]
        let fullDate=`${month} ${day}, ${year}`.toUpperCase()
        
        return(
            <p className='postDate'>{fullDate}</p>
        )

    }

    renderTitle=()=>{

        if(this.context.currentPost.title){
            return (
                <>
                <h1>{this.context.currentPost.title.rendered}</h1>
                </>
            )
        }
    }

    renderComments = () => {
        
        if(this.context.currentPost.length!==0){
            return(
                <CommentsList postId={this.context.currentPost.id}/>
            )
        }
    }
        
    render(){
        let content = this.context.currentPost.content

        console.log(this.context.currentPost)
        return(    
            <>
            <div className='heroBannerPost'>
                <div className='heroTextPost'>
                    <nav>
                        <h1>Fairground</h1>
                        {/*<div className='title'>
                            <h1>Fairground Assets</h1>
                            <h2>By Arusha Consulting</h2>
                        </div>*/}
                        <NavLinks/>
                    </nav>
                    
                    <div className='heroMessage'>
                        {/*<p>FAIRGROUND <br/> BLOG</p>*/}
                    </div>
                    
                </div>
                <div className='heroImagePost'>
                    <div className='heroOverlay'>
                    </div>
                </div>
            </div>

            {/*<section className='postContentSection'>
                {this.renderTitle()}
                {this.renderDate()}
                {this.renderImage()}
                {this.renderContent()}
                
                {this.renderComments()}
                    </section>*/}

            
            
            <footer >
                <p>Footer with whatever you want in it.</p>
            </footer>
            </>
        )
    }
}