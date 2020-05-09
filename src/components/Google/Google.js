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
        console.log(response)
        /*this.setState({
            isLoggedIn: true,
            userId: response.profileObj.googleId,
            name: response.profileObj.name,
            email:response.profileObj.email,
            picture: response.profileObj.imageUrl
        })*/

        this.context.setUserLoggedIn()
        this.context.setUsersName(response.profileObj.name)
        this.context.setUsersProfileImg(response.profileObj.imageUrl)
        this.context.setUsersEmail(response.profileObj.email)
        this.context.setUsersId(response.profileObj.googleId)
    }

    render(){

        console.log(this.state)

        let googleContent

        if(this.context.userLoggedIn===true){
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
                    //<button onClick={renderProps.onClick} disabled={renderProps.disabled}>G</button>
                  )}
                onSuccess={this.responseGoogle}
                //onFailure={this.responseGoogle}
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