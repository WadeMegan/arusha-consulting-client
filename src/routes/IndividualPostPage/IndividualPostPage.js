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
import Error from '../../components/Error/Error'

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
                .catch(this.context.setError)
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

    componentDidMount=()=>{
        this.context.clearError()
    }

     renderImage=()=>{

        

        if(!this.state.mediaUrl && this.context.currentPost.length !== 0){


            PostsApiService.getPostFeaturedImage(this.context.currentPost.fields.featuredImage.sys.id)
                .then(res=>{
                    this.setState({
                        mediaUrl: res.fields.file.url
                    })
                })
                .catch(this.context.setError)
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

    renderDateAuthor = () => {
        
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
                <>
                <p className='postDate'>{fullDate}</p>
                <p className='postDate'>BY {this.context.currentPost.fields.author.toUpperCase()}</p>
                </>
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


    renderAnchor=()=>{
        if(this.context.currentPost.length!==0){
            return(
                <div className='postPageAnchorSection'>
                    <div className='postAnchor'>
                        <div className='sponsorAnchor'>
                            <p>This post is sponsored by {this.context.currentPost.fields.sponsorName}</p>
                            <p>{this.context.currentPost.fields.sponsorDescription}</p>
                            <a target='_blank' rel="noopener noreferrer" href={this.context.currentPost.fields.sponsorLink}>Learn more about {this.context.currentPost.fields.sponsorName}.</a>
                        </div>
                        <div className='disclaimerAnchor'>
                            <p>PLEASE NOTE: Fairground blog authors don’t have all the answers. They do have thoughts and ideas that
                            have been sparked from their own exploration of diversity, equity, inclusion, and social
                            justice and an authentic interest in helping to improve the current reality. They share three
                            more things in common: 1) the courage to put themselves out front in a charged field, 2) the
                            humility to know that they may get it wrong at some point, and 3) the commitment to
                            always do better when they know better. We thank them for their vulnerability so that
                            others may feel less hesitant to speak up themselves. May Fairground remain a comfortable
                            space for everyone to learn, grow, and take action. </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

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
            <Error>
            <section className='individualPostPageSection'>
                {this.renderAnchor()}
                <div className='postContentSection'>
                    {this.renderTitle()}
                    {this.renderDateAuthor()}
                    {this.renderImage()}
                    {this.renderContent()}
                    {this.renderComments()}
                </div>

            </section>   
            

            
            
            <footer >
                <p>Footer with whatever you want in it.</p>
            </footer>
            </Error>
            </>
        )
    }
}