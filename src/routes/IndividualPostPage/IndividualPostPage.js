import React, { Component } from 'react'
import './IndividualPostPage.css'
import { Link } from 'react-router-dom'
import PostsListContext from '../../contexts/PostsListContext'
import PostsApiService from '../../services/posts-api-service'
import NavLinks from '../../components/NavLinks/NavLinks'
import CommentsList from '../../components/CommentsList/CommentsList'
import MarkdownView from 'react-showdown'
import Error from '../../components/Error/Error'
import $ from 'jquery'

export default class IndividualPostPage extends Component{

    static contextType = PostsListContext

    constructor() {
        super();
        this.state = {
          userDetails: {},
          isUserLoggedIn: false,
          mediaUrl: null,
          sponsorImg: null,
        };
      }

    componentWillMount() {

        window.scrollTo(0, 0)

        if(this.context.postsList.length!==0){

            let postsList = this.context.postsList

        

            const currentPost = postsList.find(post=>
                post.fields.title === this.props.match.params.title
            )

            

            this.context.setCurrentPost(currentPost)

            if(this.context.assetsList){
                let featuredImg = this.context.assetsList.find(asset=>
                    asset.sys.id === currentPost.fields.featuredImage.sys.id
                )
                this.setState({
                    mediaUrl: featuredImg.fields.file.url,
                })
            }
            
            
        }
        else{

            PostsApiService.getPosts()
            .then(res=>{ 

                this.context.setPostsList(res.items)

                let currentPost = res.items.find(post=>
                    post.fields.title === this.props.match.params.title
                )



                this.context.setCurrentPost(currentPost)
            })
            .catch(this.context.setError)

        }

    }

    componentDidMount=()=>{
        this.context.clearError()
    }

     renderImage=()=>{

        

        if(!this.state.mediaUrl && this.context.currentPost && this.context.currentPost.fields ){


            PostsApiService.getPostFeaturedImage(this.context.currentPost.fields.featuredImage.sys.id)
                .then(res=>{
                    this.setState({
                        mediaUrl: res.fields.file.url
                    })
                })
                .catch(this.context.setError)
        
        }  

        //jquery used to make height of .featuredImgPost exactly 1/2 of width to accomodate 2:1 images
        var width = $(".featuredImgPost").width();
        $(".featuredImgPost").height(width * 0.5);

        $(window).resize(function () {
            var width = $(".featuredImgPost").width();
            $(".featuredImgPost").height(width * 0.5);
        });

            let style={
                backgroundImage:`url(${this.state.mediaUrl})`
            }
 
             return(
                 <div className='featuredImgPost' style={style}>

                 </div>
             )
 
         }     
        
    renderSponsorImg=()=>{
        if(!this.state.sponsorImg && this.context.currentPost && this.context.currentPost.fields ){


            PostsApiService.getPostFeaturedImage(this.context.currentPost.fields.sponsorImg.sys.id)
                .then(res=>{
                    this.setState({
                        sponsorImg: res.fields.file.url
                    })
                })
                .catch(this.context.setError)
        }   
        
 
        return(
        <img src={this.state.sponsorImg} className='sponsorAnchorImg' alt='sponsor'></img>
        )
    }

    componentWillUnmount() {
        this.context.setCurrentPost([])
    }

    renderContent = () => {

        //any links not pointing to arushainc.com will open new tab
        let links=document.links

        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname != window.location.hostname) {
                links[i].target = '_blank';
            } 
         }

        if(this.context.currentPost && this.context.currentPost.fields){
            //console.log(this.context.currentPost.fields.content)
            return(
                <div className='contentContainer'>
                <MarkdownView markdown={this.context.currentPost.fields.content} />
                </div>
            )
        }
    }

    renderDateAuthor = () => {
        
        if(this.context.currentPost && this.context.currentPost.fields){
        
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


        if(this.context.currentPost && this.context.currentPost.fields ){
            return (
                <>
                <h1 className='postTitle'>{this.context.currentPost.fields.title}</h1>
                </>
            )
        }
    }

    renderComments = () => {
        
        if(this.context.currentPost && this.context.currentPost.fields){
            return(
                <CommentsList/>
            )
        }
    }
    
    renderSponsorAnchor=()=>{
        

        if(this.context.currentPost && this.context.currentPost.fields && this.context.currentPost.fields.sponsorName){
            return(
                <a className='sponsorAnchorLink' target='_blank' rel="noopener noreferrer" href={this.context.currentPost.fields.sponsorLink}>
                    <div className='sponsorAnchor'>
                        {this.renderSponsorImg()}
                        <h2>Sponsored By {this.context.currentPost.fields.sponsorName}</h2>
                    </div>    
                </a>
            )
        }
    }

    render(){

        return(    
            <>
            <Error>
            <section className='individualPostPageSection'>
                <div className='postPageAnchorSection'>
                    <div className='postAnchor'>
                        {this.renderSponsorAnchor()}
                        <div className='disclaimerAnchor'>
                            <p><em>Fairground blog authors don’t have all the answers. They do have thoughts and ideas that
                            have been sparked from their own exploration of diversity, equity, inclusion, and social
                            justice and an authentic interest in helping to improve the current reality. They share three
                            more things in common: 1) the courage to put themselves out front in a charged field, 2) the
                            humility to know that they may get it wrong at some point, and 3) the commitment to
                            always do better when they know better. We thank them for their vulnerability so that
                            others may feel less hesitant to speak up themselves. May Fairground remain a comfortable
                            space for everyone to learn, grow, and take action. </em></p>
                        </div>
                    </div>
                </div>
                <div className='postContentSection'>
                    {this.renderTitle()}
                    {this.renderDateAuthor()}
                    {this.renderImage()}
                    {this.renderContent()}
                    {this.renderComments()}
                </div>

            </section>   
            

            
            
            <footer >
            <p><Link to='/blog'>Fairground</Link> and <Link to='/assets'>Fairground Assets</Link> are powered by <Link to="/">Arusha Consulting</Link>, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good.</p>
                <p><Link to='/assets'>Fairground Assets</Link> is a crowd-sourced database for those interested in deepening their
                understanding to make a positive difference when it comes to diversity, inclusion, equity,
                and social justice.</p>
                <p>Questions? Comments? Reach out to Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a>.</p>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>

            </footer>
            </Error>
            </>
        )
    }
}