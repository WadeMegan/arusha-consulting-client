import React, { Component } from 'react'
//import './NavLinks.css'
import FacebookLogin from 'react-facebook-login';
import PostsListContext from '../../contexts/PostsListContext'

export default class Facebook extends Component{    

    static contextType = PostsListContext

    componentClicked=ev=>{
        console.log('clicked')
    }

    responseFacebook=(response)=>{
        console.log(response)
        /*this.setState({
            isLoggedIn: true,
            userId: response.userID,
            name: response.name,
            email:response.email,
            picture: response.picture.data.url
        })*/
        this.context.setUserLoggedIn(true)
        this.context.setUsersName(response.name)
        this.context.setUsersProfileImg(response.picture.data.url)
        this.context.setUsersEmail(response.email)
    }

    render(){

        let fbContent

        if(this.context.userLoggedIn===true){
            fbContent=(
                <div>
                    You are logged in!
                </div>
            )
        } else {
            fbContent = (<FacebookLogin
                appId="285368999287154"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/>)
        }

        return(    
            <div>
               {fbContent}
            </div>   
        )
    }
}