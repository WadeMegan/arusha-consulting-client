import React, { Component } from 'react'
import './PostsList.css'
import PostsApiService from '../../services/posts-api-service'
import SponsorApiService from '../../services/sponsor-api-service'
import PostsListContext from '../../contexts/PostsListContext'
import PostItem from '../PostItem/PostItem'
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const LoadingIndicator = props => {

    const { promiseInProgress } = usePromiseTracker()

    return (
        promiseInProgress &&
        <div className='loadingIndicatorBox'>
            <Loader className='loadingIndicator' type="ThreeDots" color="#6E274E" height="100" width="100"/>
        </div>
        
    )
}

export default class PostsList extends Component{
    
    static contextType = PostsListContext

    componentWillMount() {

        trackPromise(
            PostsApiService.getPosts()
            .then(res=>{

                this.context.setPostsList(res.items)
                this.context.setAssetsList(res.includes.Asset)

                SponsorApiService.getSponsor()
                    .then(res=>{
                        this.context.setFeaturedSponsor(res.items[0])
                        this.context.setSponsorMedia(res.includes.Asset)
                    })
                    .catch(this.context.setError)

            })
            .catch(this.context.setError)
        )
    }

    componentDidMount=()=>{
        this.context.clearError()
    }

    renderPosts=()=>{


        if(this.context.postsList.length !== 0){
            
            let posts = this.context.postsList

            let postItems = posts.map(post=>{
                return (

                    <PostItem key={post.sys.id} post={post}/>
                    
                )
            })
            
            return(
                <>
                {postItems}
                </>
            )
        }

    }


    renderImage=()=>{

        if(this.context.sponsorMedia){
            
            let assetList = this.context.sponsorMedia
 

            let featuredImgId = this.context.featuredSponsor.fields.image.sys.id



            const featuredImg = assetList.find(asset=>
                asset.sys.id === featuredImgId
            )




            let myStyle = {
                background: `url(${featuredImg.fields.file.url}) no-repeat center center`,
                backgroundSize: "cover"
              };

            return(
                <div className='featuredImage' style={myStyle} alt={featuredImg.fields.title}></div>
            )
        }
    }

    renderFeaturedSponsor=()=>{
        if(this.context.featuredSponsor){
            
            return (
                <a target='_blank' rel="noopener noreferrer" href={this.context.featuredSponsor.fields.sponsorWebsite}>
                    <div className='postItem'>
                        {this.renderImage()}
                        <h2>SPONSORED BY {this.context.featuredSponsor.fields.sponsorName.toUpperCase()}</h2>
                    </div>    
                </a>
            )
        }
    }
    
    render(){
        return(
            <>
            <div className='postsContainer'>
                <LoadingIndicator/>
                {this.renderPosts()} 
            </div>            
            </>
        )
    }
}