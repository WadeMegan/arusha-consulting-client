import React, { Component } from 'react'
import './PostItem.css'
import { Link } from 'react-router-dom'

export default class PostItem extends Component{
        
    render(){
        let date = new Date(this.props.post.date)
        let dateString = date.toString()
        let splitDate = dateString.split(' ')
        let month = splitDate[1]
        let day = splitDate[2]
        let year = splitDate[3]
        let fullDate=`${month} ${day}, ${year}`.toUpperCase()
        
        let myStyle = {
            background: `url(${this.props.post.featured_image}) no-repeat center center`,
            backgroundSize: "100% auto"
          };

        return(    
            <Link to={`/fairground/posts/${this.props.post.ID}`}>
                <div className='postItem'>
                    <div className='featuredImage' style={myStyle} />
                    <p>{fullDate}</p>
                    <h2>{this.props.post.title.toUpperCase()}</h2>
                </div>    
            </Link>        
        )
    }
}