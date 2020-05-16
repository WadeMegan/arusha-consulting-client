import React, { Component } from 'react'
import './ContactPage.css'
import PostsListContext from '../../contexts/PostsListContext'

export default class ContactPage extends Component{    

    static contextType = PostsListContext

    render(){
        return(    
            <div>
               <h1>Contact Page</h1>
            </div>   
        )
    }
}