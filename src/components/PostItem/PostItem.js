import React, { Component } from 'react'
import './PostItem.css'
import { Link } from 'react-router-dom'
import PostsApiService from '../../services/posts-api-service'

export default class PostItem extends Component{
        
    state={
        mediaUrl: null
    }

    componentWillMount(){

       PostsApiService.getPostFeaturedImage(this.props.post.featured_media)
            .then(res=>{

                this.setState({
                    mediaUrl: res.guid.rendered
                })
                
            })

            .catch()
    }

    renderImage=()=>{

        console.log(this.state)

        if(this.state.mediaUrl){
            let myStyle = {
                background: `url(${this.state.mediaUrl}) no-repeat center center`,
                backgroundSize: "100% auto"
              };

            return(
                <div className='featuredImage' style={myStyle}></div>
            )



        }        
    }

    render(){

        console.log(this.state)

        let date = new Date(this.props.post.date)
        let dateString = date.toString()
        let splitDate = dateString.split(' ')
        let month = splitDate[1]
        let day = splitDate[2]
        let year = splitDate[3]
        let fullDate=`${month} ${day}, ${year}`.toUpperCase()
        
        return(    
            <Link to={`/fairground/posts/${this.props.post.id}`}>
                <div className='postItem'>
                    {this.renderImage()}
                    <p>{fullDate}</p>
                    <h2>{this.props.post.title.rendered.toUpperCase()}</h2>
                </div>    
            </Link>        
        )
    }
}