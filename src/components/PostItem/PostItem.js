import React, { Component } from 'react'
import './PostItem.css'
import { Link } from 'react-router-dom'
import PostsApiService from '../../services/posts-api-service'
import PostsListContext from '../../contexts/PostsListContext'


export default class PostItem extends Component{
        
    static contextType = PostsListContext

    state={
        mediaUrl: null
    }

    componentWillMount(){

       /*PostsApiService.getPostFeaturedImage(this.props.post.featured_media)
            .then(res=>{

                this.setState({
                    mediaUrl: res.guid.rendered
                })
                
            })

            .catch()*/
    }

    renderImage=()=>{

        //console.log(this.context.assetsList)
        //console.log(this.props.post.fields.featuredImage.sys.id)

        if(this.context.assetsList){
            
            
            
            let assetList = this.context.assetsList


            let featuredImgId = this.props.post.fields.featuredImage.sys.id


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

        /*if(this.state.mediaUrl){
            let myStyle = {
                background: `url(${this.state.mediaUrl}) no-repeat center center`,
                backgroundSize: "100% auto"
              };

            return(
                <div className='featuredImage' style={myStyle}></div>
            )



        }     */   
    }

    render(){


        let date = new Date(this.props.post.fields.date)
        let dateString = date.toString()
        let splitDate = dateString.split(' ')
        let month = splitDate[1]
        let day = splitDate[2]
        let year = splitDate[3]
        let fullDate=`${month} ${day}, ${year}`.toUpperCase()
        
        return(    
            <Link to={`/blog/${this.props.post.fields.title}`}>
                <div className='postItem'>
                    {this.renderImage()}
                    <p>{fullDate}</p>
                    <h2>{this.props.post.fields.title.toUpperCase()}</h2>
                </div>    
            </Link>        
        )
    }
}