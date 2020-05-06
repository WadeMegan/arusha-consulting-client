import React, { Component } from 'react'
import './Google.css'
import GoogleLogin from 'react-google-login'
import PostsListContext from '../../contexts/PostsListContext'

export default class Google extends Component{


    static contextType = PostsListContext
        
    state={
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }

    responseGoogle=(response)=>{
        /*console.log(response)
        this.setState({
            isLoggedIn: true,
            userId: response.profileObj.googleId,
            name: response.profileObj.name,
            email:response.profileObj.email,
            picture: response.profileObj.imageUrl
        })*/

        this.context.setUserLoggedIn(true)
        this.context.setUsersName(response.profileObj.name)
        this.context.setUsersProfileImg(response.profileObj.imageUrl)
        this.context.setUsersEmail(response.profileObj.email)
    }

    render(){

        console.log(this.state)

        let googleContent

        if(this.context.userLoggedIn){
            googleContent=(
                <div>
                    You are logged in!
                </div>
            )
        } else {
            googleContent = (<GoogleLogin
                clientId="376742085814-of2ob321fhiprllfiephu05cm3s1qram.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                
              /> )
        }

        return(    
            <div>
               {googleContent}
            </div>   
        )
    }
}