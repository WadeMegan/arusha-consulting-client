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

        UsersService.saveName(response.profileObj.name)
        UsersService.saveProfileImg(response.profileObj.imageUrl)
        UsersService.saveEmail(response.profileObj.email)
        UsersService.saveUserId(response.profileObj.googleId)
        this.props.onSuccess()
    }

    render(){



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
                clientId="376742085814-cme16sgovcgr1pkpgga0dtt0b5i6hnmo.apps.googleusercontent.com"
                render={renderProps => (
                    <i onClick={renderProps.onClick} className="fab fa-google googleSigninIcon"></i>    
                  )}
                onSuccess={this.responseGoogle}
                onFailure={err => console.log('error')}
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