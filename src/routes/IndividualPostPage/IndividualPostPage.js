import React, { Component } from 'react'
import './IndividualPostPage.css'
import { Link } from 'react-router-dom'
import PostsListContext from '../../contexts/PostsListContext'
import PostsApiService from '../../services/posts-api-service'
import NavLinks from '../../components/NavLinks/NavLinks'
import CommentsList from '../../components/CommentsList/CommentsList'
import MarkdownView from 'react-showdown';
import { GoogleLogin } from 'react-google-login'
import { GoogleLogout } from "react-google-login";

export default class IndividualPostPage extends Component{

    static contextType = PostsListContext

    constructor() {
        super();
        this.state = {
          userDetails: {},
          isUserLoggedIn: false,
          mediaUrl: null
        };
      }

    componentWillMount() {

        window.scrollTo(0, 0)

        if(this.context.postsList.length!==0){

            let postsList = this.context.postsList

            const currentPost = postsList.find(post=>
                post.sys.id === this.props.match.params.id
            )


            this.context.setCurrentPost(currentPost)

            let featuredImg = this.context.assetsList.find(asset=>
                asset.sys.id === currentPost.fields.featuredImage.sys.id
            )

            this.setState({
                mediaUrl: featuredImg.fields.file.url
            })

        }
        else{
            PostsApiService.getPostById(this.props.match.params.id)
                .then(this.context.setCurrentPost)
                .catch()
        }

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

        

        if(!this.state.mediaUrl && this.context.currentPost.length !== 0){


            PostsApiService.getPostFeaturedImage(this.context.currentPost.fields.featuredImage.sys.id)
                .then(res=>{
                    this.setState({
                        mediaUrl: res.fields.file.url
                    })
                })
                .catch()
            /*let featuredImg = this.context.assetsList.find(asset=>
                asset.sys.id === currentPost.fields.featuredImage.sys.id
            )
    
            this.setState({
                mediaUrl: featuredImg.fields.file.url
            })*/

        }
        
 
             return(
                <img src={this.state.mediaUrl} className='featuredImgPost' alt='featured image'></img>
             )
 
         }        

    componentWillUnmount() {
        this.context.setCurrentPost([])
    }

    /*createMarkup=()=>{
        if(this.context.currentPost.content){
            return {__html: `${this.context.currentPost.content.rendered}`}
        }
    }*/

    renderContent = () => {
        //let html = this.createMarkup()

        if(this.context.currentPost.length!==0){


            //var converter = new showdown.Converter()
            //let html = converter.makeHtml(this.context.currentPost.fields.content)
            //console.log(html)

            return(
                <div className='contentContainer'>
                {/*<div>{html}</div>*/}
                <MarkdownView markdown={this.context.currentPost.fields.content} />
                {/*<div className='postContent' dangerouslySetInnerHTML={html}/>*/}
                </div>
            )
        }
    }

    renderDate = () => {
        
        if(this.context.currentPost.length!==0){
        
            let date = new Date(this.context.currentPost.fields.date)
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

    }

    renderTitle=()=>{


        if(this.context.currentPost.length!==0){
            return (
                <>
                <h1>{this.context.currentPost.fields.title}</h1>
                </>
            )
        }
    }

    renderComments = () => {
        
        if(this.context.currentPost.length!==0){
            return(
                <CommentsList /*postId={this.context.currentPost.id}*//>
            )
        }
    }

    /*onSignIn=(googleUser)=> {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }*/
        

      /*responseGoogle = response => {
          console.log('hi')
        this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
      };
    
      logout = () => {
        console.log('goodbye')
        this.setState({isUserLoggedIn: false})
      };*/


      /*onSignIn=(googleUser)=>{
        console.log('onSignIn ran')
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }*/

    render(){
        let content = this.context.currentPost.content
        
        /*function onSignIn(googleUser){
            console.log('onSignIn ran')
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          }*/

        return(    
            <>
            <section className='postContentSection'>
                {this.renderTitle()}
                {this.renderDate()}
                {this.renderImage()}
                {this.renderContent()}
                {this.renderComments()}
            </section>

            
            
            <footer >
                <p>Footer with whatever you want in it.</p>
            </footer>
            </>
        )
    }
}