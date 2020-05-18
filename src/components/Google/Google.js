import React, { Component } from 'react'
import './Google.css'
import GoogleLogin from 'react-google-login'
import PostsListContext from '../../contexts/PostsListContext'
import UsersService from '../../services/users-service'

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
        console.log(response)
        /*this.setState({
            isLoggedIn: true,
            userId: response.profileObj.googleId,
            name: response.profileObj.name,
            email:response.profileObj.email,
            picture: response.profileObj.imageUrl
        })*/

        /*this.context.setUserLoggedIn()
        this.context.setUsersName(response.profileObj.name)
        this.context.setUsersProfileImg(response.profileObj.imageUrl)
        this.context.setUsersEmail(response.profileObj.email)
        this.context.setUsersId(response.profileObj.googleId)*/
        UsersService.saveName(response.profileObj.name)
        UsersService.saveProfileImg(response.profileObj.imageUrl)
        UsersService.saveEmail(response.profileObj.email)
        UsersService.saveUserId(response.profileObj.googleId)
        this.props.onSuccess()
    }

    render(){

        console.log(this.state)

        let googleContent

        if(UsersService.getName()){
            googleContent=(
                <div>
                    You are logged in!
                </div>
            )
        } else {
            googleContent = (<GoogleLogin
                className='googleButton'
                clientId="376742085814-of2ob321fhiprllfiephu05cm3s1qram.apps.googleusercontent.com"
                render={renderProps => (
                    <i onClick={renderProps.onClick} className="fab fa-google-plus fa-2x googleSigninIcon"></i>    
                  )}
                onSuccess={this.responseGoogle}
                onFailure={err => console.log('fail', err)}
                cookiePolicy={'single_host_origin'}
                
              /> )
            
            /*(<GoogleLogin
                className='googleButton'
                clientId="376742085814-of2ob321fhiprllfiephu05cm3s1qram.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                
              /> )*/

        }

        return(    
            <div>
               {googleContent}
            </div>   
        )
    }
}