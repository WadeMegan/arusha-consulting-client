import React, { Component } from 'react'
//import './NavLinks.css'
import './Facebook.css'
//import FacebookLogin from 'react-facebook-login';
import PostsListContext from '../../contexts/PostsListContext'
import { FacebookLogin } from 'react-facebook-login-component';
import UsersService from '../../services/users-service'

export default class Facebook extends Component{    

    static contextType = PostsListContext

    responseFacebook=(response)=>{

        if(!response.name){
            console.log('error')
        }else{
            UsersService.saveName(response.name)
            UsersService.saveProfileImg(response.picture.data.url)
            UsersService.saveEmail(response.email)
            UsersService.saveUserId(response.id)
            this.props.onSuccess()
        }
        
    }

    render(){

        let fbContent

        if(UsersService.getName()){
            fbContent=(
                <div>
                    You are logged in!
                </div>
            )
        } else {
            fbContent = 
               ( <FacebookLogin socialId="285368999287154"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="email,name,picture"
                       version="v2.5"
                       className="facebookButton"
                       buttonText={<i className="fab fa-facebook-f"></i>}/>)
        }

        return(    
            <div>
               {fbContent}
            </div>   
        )
    }
}