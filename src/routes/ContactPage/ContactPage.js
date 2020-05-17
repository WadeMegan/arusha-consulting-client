import React, { Component } from 'react'
import './ContactPage.css'
import PostsListContext from '../../contexts/PostsListContext'


export default class ContactPage extends Component{    

    static contextType = PostsListContext

    render(){
        return(    
            <div>
               <h1>Contact Page</h1>
               <a href='http://eepurl.com/g3Q13b'>Subscribe</a>
               <a href='https://arushainc.us18.list-manage.com/unsubscribe?u=f5a80641987afaa0a68101adf&id=084100a8da'>Unsubscribe</a>



{/*<div id="mc_embed_signup">
    <form action="https://arushainc.us18.list-manage.com/subscribe/post?u=f5a80641987afaa0a68101adf&amp;id=084100a8da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Join Email List</label>
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
        </div>
        
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f5a80641987afaa0a68101adf_084100a8da" tabindex="-1" value=""/>

        </div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
        </div>
    </form>
        </div>*/}





            </div>   
        )
    }
}