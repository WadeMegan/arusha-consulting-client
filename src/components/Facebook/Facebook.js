import React, { Component } from 'react'
//import './NavLinks.css'
import './Facebook.css'
//import FacebookLogin from 'react-facebook-login';
import PostsListContext from '../../contexts/PostsListContext'
import { FacebookLogin } from 'react-facebook-login-component';
import UsersService from '../../services/users-service'

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
        if(!response.name){
            this.context.setError()
        }else{
            //console.log(response)
            //this.context.setUserLoggedIn()
            /*this.context.setUsersName(response.name)
            this.context.setUsersProfileImg(response.picture.data.url)
            this.context.setUsersEmail(response.email)
            this.context.setUsersId(response.id)*/

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
            fbContent = /*(<FacebookLogin
                appId="285368999287154"
                icon={<i class="fab fa-facebook fa-2x"></i>}
                textButton = ""
                cssClass="facebookButton"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                //icon="fa-facebook"
                />)*/
               ( <FacebookLogin socialId="285368999287154"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="email,name,picture"
                       version="v2.5"
                       className="facebookButton"
                       buttonText={<i class="fab fa-facebook fa-2x"></i>}/>)
        }

        return(    
            <div>
               {fbContent}
            </div>   
        )
    }
}