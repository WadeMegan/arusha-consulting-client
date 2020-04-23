import React, { Component } from 'react'
import './FairgroundAssetsPage.css'
/*import { Link } from 'react-router-dom'*/
import NavLinks from '../../components/NavLinks/NavLinks'


export default class FairgroundAssetsPage extends Component{
    
    createCreditBadge =()=>{
    
        return (
            /*<a className='creditBadge' style={aStyles} href="https://unsplash.com/@llgp?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Laura Louise Grimsley"><span style={spanStyles}><svg xmlns="http://www.w3.org/2000/svg" style={svgStyles} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style={span2Styles}>Laura Louise Grimsley</span></a>*/
            <a className='creditBadge' target='_blank' rel="noopener noreferrer" href='https://unsplash.com/@llgp'>Photo by Laura Louise Grimsley on Unsplash</a>
        )

    }
    
    render(){

        return(
            <>
            <div className='heroBanner'>
                <div className='heroText'>
                    <nav>
                        {/*<NavLinks/>*/}
                    </nav>
                    
                    <div className='title'>
                        <h1>Fairground Assets<p>By Arusha Consulting</p></h1>
                        
                    </div>

                    {/*<div className='heroMessage'>
                        <p>CREATING <br/> FAIRGROUND <br/> FOR ALL.</p>
                    </div>*/}
                    
                    {this.createCreditBadge()}

                    <p className='message'>Creating fairground for all.</p>
                    
                </div>
                <div className='heroImage'>
                    <div className='heroOverlay'>
                    </div>
                </div>
            
            
            </div>
          
            <section className='aboutFairground'>
                <h2>About Fairground Assets</h2>
                <p>Fairground is a place that welcomes anyone who belongs to a dominant in-group, and frankly, that should be just about every human. With very few exceptions, each of us, no matter the injustices we face, belongs to at least one dominant in-group.</p>
                <p>Fairground has one huge tent with an open door to everyone. Come one, come all to explore our own role in perpetuating out-groups despite even our best intentions. Even better, through Fairground Assets, we can rely on each other to equip ourselves for being the change we would like to see when it comes to diversity, inclusion, equity, and social justice.</p>
                <p>Fairground Assets addresses the biggest obstacles to achieving inclusion, equity, and social justice for diverse people. Until members of the dominant in-groups care about, understand, and address the issues members of out-groups face, we will not gain any ground. We must not shy away from poignant conversations with and about people who are different from us due to a fear of saying or doing the wrong thing. This kind of inaction is as dangerous as overt prejudice. We must educate ourselves so that we can stand up for our values with confidence and truly make a difference.</p>
                <p>We believe that peer-to-peer recommendations are an incredible way to support each other with a wide net of proven resources to meet our specific learning needs and interests in one organized place.</p>
                <p>Please join us in making a concerted effort to learn more so we can do more. We encourage you to</p>
                <ul>
                    <li className='listItem'>submit resources and include a comment for each as to why you believe others would find it helpful;</li>
                    <li className='listItem'>explore the available assets, which will deepen your understanding, introduce you to the unfamiliar, and challenge you to stretch the limits of your level of comfort; and</li>
                    <li className='listItem'>move from this place of education and inspiration to a place of action
                        <ul>
                            <li className='firstSubListItem subListItem'>as a better friend, neighbor, relative, lover, ally, sponsor, mentor, or advocate to people who are different than you</li>
                            <li className='lastSubListItem subListItem'>and as a role model, teacher, and organizer within the groups that have historically held (and hoarded) power.</li>
                        </ul>
                    </li>
                </ul>
                <p>Together we will achieve fairground, where every individual will be able to stand with an expectation for respect, justice, and equal access to opportunity.</p>
                <button onClick={()=> window.open("https://airtable.com/shrwoRXZIJFs2EwwJ", "_blank")}>Submit A Resource</button>
            </section>
            <section className='resourcesSection'>
                <h2>Assets</h2>
                {/*<p>Anything you want to note about the resources or how to use them?</p>*/}
                <div className="airtableContainer">
                    <iframe className="airtable-embed" src="https://airtable.com/embed/shruUGrq2VMRvuu5P?backgroundColor=blue&viewControls=on" frameBorder="0" width="100%" height="533"></iframe>
                </div>
            </section>
            <footer>
                <h3>Copyright 2020 - Arusha Consulting</h3>
                <p>Fairground and Fairground Assets are powered by Arusha Consulting, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their strengths, desires, resources, relationships, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
                <p>Very special thanks to Molly, Megan, and Sophia whose genius and hard work brought this passion project to fruition in record time.</p>
                <p>For any questions or comments, please contact Heather Sattler at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a></p>
            </footer>
            </>
        )
    }
}