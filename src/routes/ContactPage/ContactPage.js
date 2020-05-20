import React, { Component } from 'react'
import './ContactPage.css'
import PostsListContext from '../../contexts/PostsListContext'
import facebookLogo from '../../images/facebookLogo.png'
import instagramLogo from '../../images/instagramLogo.png'
import pinterestLogo from '../../images/pinterestLogo.png'
import linkedInLogo from '../../images/linkedInLogo.png'
import { Link } from 'react-router-dom'


export default class ContactPage extends Component{    

    static contextType = PostsListContext

    componentWillMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(    
            <>
            <section className='contactPageSection'>
               <h1>Contact</h1>
               <h2>Stay In Touch</h2>
               <p>Subsribe to the email list to stay in touch with what's happening at Arusha.</p>
               <a className='subscribeButton' target='_blank' rel="noopener noreferrer" href='http://eepurl.com/g3Q13b'>Subscribe</a>
               <h2>Arusha Consulting, Inc. | coaching + consulting </h2>
               <p className='phoneContactInfo'>p: 872.239.8839</p>
               <p className='phoneContactInfo'>c: 773.991.1194</p>
               <p className='phoneContactInfo'>e: heather@arushainc.com</p>

               {/*<p className='compContactInfo'>p: 872.239.8839 | c: 773.991.1194 | e: heather@arushainc.com</p>*/}
               <div>
                   <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/arushaconsulting"><img className='contactSocial' src={facebookLogo}/></a>

                   <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/arushaconsulting/"><img className='contactSocial' src={instagramLogo}/></a>

                   <a target='_blank' rel="noopener noreferrer" href="https://www.pinterest.com/arushaconsulting/"><img className='contactSocial' src={pinterestLogo}/></a>

                   <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/company/arusha-consulting-inc"><img className='contactSocial' src={linkedInLogo}/></a>

               </div>




                {/*<a className='unsubscribeButton' target='_blank' rel="noopener noreferrer" href='https://arushainc.us18.list-manage.com/unsubscribe?u=f5a80641987afaa0a68101adf&id=084100a8da'>Unsubscribe</a>*/}



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





            </section>   
            <footer className='aboutPageFooter'>
            <p><Link to='/blog'>Fairground</Link> and <Link to='/assets'>Fairground Assets</Link> are powered by <Link to='/'>Arusha Consulting</Link>, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
            
                <p>Reach out to learn more about 1:1 coaching, workshops, and consulting offerings.</p>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
            </footer>
            </>
        )
    }
}