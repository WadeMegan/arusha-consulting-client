import React, { Component } from 'react'
import './AboutPage.css'
import { Link } from 'react-router-dom'
import PostsApiService from '../../services/posts-api-service'
import PostsList from '../../components/PostsList/PostsList'
import NavLinks from '../../components/NavLinks/NavLinks'
import heatherHeadshot from '../../images/heatherHeadshot.png'
import arushaMeetHeatherLogo from '../../images/arushaMeetHeatherLogo.jpg'
import NavBar from '../../components/NavBar/NavBar'
import friendsOfPrenticeLogo from '../../images/friendsOfPrentice.png'
import grouponLogo from '../../images/groupon.png'
import loyolaLogo from '../../images/loyola.png'
import macLogo from '../../images/mac.png'
import westsideJusticeCenterLogo from '../../images/westsideJusticeCenter.png'
import { Slide } from 'react-slideshow-image';
import testimonial1 from '../../images/testimonial1.png'
import testimonial2 from '../../images/testimonial2.png'
import brushstrokes from '../../images/brushstrokes.png'


export default class AboutPage extends Component{
    
    render(){


        let properties = {
            duration: 50000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true, //change to true if want arrows
            pauseOnHover: true,
            onChange: (oldIndex, newIndex) => {
              console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
          }

        return(
            <>
    
            <section className='aboutArushaSection'>
                <div className='testimonialsContainer'>
                    <h1>Testimonials</h1>

                    <div className="slide-container">
                        <Slide {...properties}>
                        <div className="each-slide">
                            <img src={testimonial1}/>
                        </div>
                        <div className="each-slide">
                            <img src={testimonial2}/>
                        </div>
                        </Slide>
                    </div>

                </div>
                <div className='clientsContainer'>
                    <h1>Clients</h1>
                    <div>
                        <img src={friendsOfPrenticeLogo}/>
                        <img src={grouponLogo}/>
                        <img src={loyolaLogo}/>
                        <img src={macLogo}/>
                        <img src={westsideJusticeCenterLogo}/>
                    </div>
                </div>

                <div className='meetHeather'>
                    
                    <div className='phoneView'>
                        <h1>Meet Heather</h1>
                        <img className='heatherHeadshot' src={heatherHeadshot}/>
                        <p>Heather Sattler inspires awareness to ignite action in both organizations and individuals. She is fervent about equal access to opportunity for all. Among her passions is providing training and coaching on supervising, mentoring, and sponsoring people outside of dominant in-groups.</p>
                        <div className='boldAboutParagraph'>
                            <img src={brushstrokes}/>
                            <div>
                                <p>Heather enjoys helping her clients align their actions with their vision and values to achieve a greater good. She relies on her strengths of awakening spirit, bringing out potential, and serving as a purveyor of depth in a light-hearted way to provide transformative experiences for those with whom she works.</p>
                            </div>
                            
                        </div>
                        <p>Following a career in non-profit management and public service, Heather founded Arusha Consulting, which provides coaching and consulting services related to leadership, people management, and diversity, equity, and inclusion.</p>
                        <p>A graduate of Georgetown University, Heather received a Master of Science degree in Public Service Management from DePaul University. For nearly a decade, she taught human resources management as an adjunct instructor for DePaul University’s Graduate School of Public Service Management and All Hallows College in Dublin, Ireland.</p>
                        <p>Some of Heather’s consulting clients have included Groupon, Big Shoulders Fund, the 100 Club of Chicago, Friends of Prentice, Gallery 37’s ArtScape Chicago, and West Cook Community Development Corporation.</p>
                        <p>Heather is a Certified Diversity Coach and Gold Status Tiara International Certified Coach. She is currently pursuing the International Coaching Federation’s Professional Coaching Certification.</p>
                    </div>

                    <div className='computerView'>
                        <div className='firstRow row'>
                            <div className='leftColumn leftP'>
                                <h1>Meet Heather</h1>
                                <p>Heather Sattler inspires awareness to ignite action in both organizations and individuals. She is fervent about equal access to opportunity for all. Among her passions is providing training and coaching on supervising, mentoring, and sponsoring people outside of dominant in-groups.</p>
                                <p>Heather enjoys helping her clients align their actions with their vision and values to achieve a greater good. She relies on her strengths of awakening spirit, bringing out potential, and serving as a purveyor of depth in a light-hearted way to provide transformative experiences for those with whom she works.</p>
                            </div>
                            <div className='rightColumn'>
                                <img className='heatherHeadshot' src={heatherHeadshot}/>
                            </div>
                            
                            
                        </div>
                        <div className='secondRow row'>
                            <p className='leftP'>Following a career in non-profit management and public service, Heather founded Arusha Consulting, which provides coaching and consulting services related to leadership, people management, and diversity, equity, and inclusion.</p>
                            <p className='rightP'>Some of Heather’s consulting clients have included Groupon, Big Shoulders Fund, the 100 Club of Chicago, Friends of Prentice, Gallery 37’s ArtScape Chicago, and West Cook Community Development Corporation.</p>
                        </div>
                        <div className='thirdRow row'>
                            <p className='leftP'>A graduate of Georgetown University, Heather received a Master of Science degree in Public Service Management from DePaul University. For nearly a decade, she taught human resources management as an adjunct instructor for DePaul University’s Graduate School of Public Service Management and All Hallows College in Dublin, Ireland.</p>
                            <p className='rightP'>Heather is a Certified Diversity Coach and Gold Status Tiara International Certified Coach. She is currently pursuing the International Coaching Federation’s Professional Coaching Certification.</p>
                        </div>
                    </div>
                    {/*<div className='leftColumn'>
                        <h2>MEET HEATHER</h2>
                        <p>Heather Sattler inspires awareness to ignite action in both organizations and individuals. She is fervent about equal access to opportunity for all. Among her passions is providing training and coaching on supervising, mentoring, and sponsoring people outside of dominant in-groups.</p>
                        <p>Heather enjoys helping her clients align their actions with their vision and values to achieve a greater good. She relies on her strengths of awakening spirit, bringing out potential, and serving as a purveyor of depth in a light-hearted way to provide transformative experiences for those with whom she works.</p>
                        <p>Following a career in non-profit management and public service, Heather founded Arusha Consulting, which provides coaching and consulting services related to leadership, people management, and diversity, equity, and inclusion.</p>
                        <p>A graduate of Georgetown University, Heather received a Master of Science degree in Public Service Management from DePaul University. For nearly a decade, she taught human resources management as an adjunct instructor for DePaul University’s Graduate School of Public Service Management and All Hallows College in Dublin, Ireland.</p>
                    </div>
                    <div className='rightColumn'>
                        <img className='heatherHeadshot' src={heatherHeadshot}/>
                        <p>Some of Heather’s consulting clients have included Groupon, Big Shoulders Fund, the 100 Club of Chicago, Friends of Prentice, Gallery 37’s ArtScape Chicago, and West Cook Community Development Corporation.</p>
                        <p>Heather is a Certified Diversity Coach and Gold Status Tiara International Certified Coach. She is currently pursuing the International Coaching Federation’s Professional Coaching Certification.</p>
                    </div>*/}
                    <img className='arushaMeetHeatherLogo' src={arushaMeetHeatherLogo}/>
                </div>
                
            </section>

            <footer className='aboutPageFooter'>
            <h3>Copyright 2020 - Arusha Consulting</h3>
                <p>Fairground and Fairground Assets are powered by Arusha Consulting, a boutique consulting and coaching firm dedicated to inspiring awareness and igniting action for the greatest good. On the consulting side, we focus on leadership, people management, and diversity and inclusion. On the coaching side, we specialize in helping people gain clarity about their values, strengths, desires, resources, relationships, fears, and obstacles to help them pursue their best lives. Our ability to help individuals explore their own relationship to issues of diversity, inclusion, and equity helps distinguish us from other consulting/coaching groups. Reach out to learn more about our 1:1 coaching, workshops, and consulting offerings.</p>
                <p>For any questions or comments, please contact Heather at <a href={"mailto:Heather@arushainc"}> Heather@arushainc.com</a></p>
            </footer>
            </>
        )
    }
}