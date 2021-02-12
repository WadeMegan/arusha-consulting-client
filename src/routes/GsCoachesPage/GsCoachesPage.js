import React, { Component } from 'react'
import './GsCoachesPage.css'
import {Link as LinkRouter} from 'react-router-dom'
import { Link } from 'react-scroll'
import heatherHeadshot from '../../images/gs-coaches/heather.png'
import amaraHeadshot from '../../images/gs-coaches/amara.png'
import victorHeadshot from '../../images/gs-coaches/victor.png'
import robbinHeadshot from '../../images/gs-coaches/robbin.png'
import tipHeadshot from '../../images/gs-coaches/tip.png'

export default class GSCoachesPage extends Component{
    componentWillMount(){
        window.scrollTo(0, 0)
    }
        
    render(){
        return(
            <>
            <section className='gsCoachesSection'>
                <div className='introContainer'>
                    <h1>Certified Professional Diversity Coaches</h1>
                    <p>Arusha is pleased to offer you the following options from our community of certified professional diversity coaches. Please review their bios, testimonials, and availability to select two coaches you would like to meet during a 15-minute inquiry session. Note all times are listed in Central Time.</p>
                    <p>Email your selections to <a href = "mailto:Heather@arushainc.com">Heather</a> and she will send you the necessary information to schedule your inquiry sessions. We appreciate your quick action so that you can stay on track to begin your coaching sessions as soon as possible. If you have any questions or need additional support, please reach out to <a href = "mailto:Heather@arushainc.com">Heather</a>.</p>
                </div>
                <div className='linkContainer'>
                    <h2>Meet the Coaches</h2>
                    <Link to="tipProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={tipHeadshot} alt='Tip Fallon' className='linkedHeadshots'/>
                    </Link> 
                    <Link to="robbinProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={robbinHeadshot} alt='Robbin Hudson' className='linkedHeadshots'/>
                    </Link>
                    <Link to="amaraProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={amaraHeadshot} alt='Amara Lynch' className='linkedHeadshots'/>
                    </Link>
                    <Link to="victorProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={victorHeadshot} alt='Victor A. Ruiz' className='linkedHeadshots'/>
                    </Link>
                    <Link to="heatherProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={heatherHeadshot} alt='Heather Sattler' className='linkedHeadshots'/>
                    </Link>
                </div>
                <div className='profileSection'>
                    <div name='tipProfile' className='profileContainer'>
                        <img src={tipHeadshot} alt='Tip Fallon' className='linkedHeadshots'/>
                        <div>
                            <h2>Tip Fallon, MSOD, CPDC (he/him/his)</h2>
                            <p>Tip Fallon is a coach and consultant who has worked with leaders and teams across multiple continents and sectors focusing on culture change, leadership development, organization development, and diversity, equity and inclusion (DEI). He is an adjunct faculty member at Georgetown University in the DEI Executive Certificate program and served as adjunct faculty at American University in the Master of Science in Organization Development (OD) program. He is an Executive Board member on the NTL Institute, and the founder of All In Consulting, a multinational consulting collective.</p>
                            <p>Tip completed degrees in mechanical engineering (BS) and organization development (MS), and is a Certified Professional Diversity Coach (CPDC). He has worked with organizations across all sectors from large government agencies, technology-based companies, and nonprofits – such as the Federal Aviation Administration, Virtusa, and Annie E. Casey Foundation.</p>
                            <p>Tip integrates a multicultural lens to his work. He identifies as multiracial, holds a strong commitment to equity, and has incorporated mindfulness practices to leadership development and team building. He grew up in the D.C. area, enjoys traveling to spend time with relatives in Thailand, and currently calls Chicago home.</p>
                            <div className='testimonialContainer'>
                                <p>“As a woman of color, I require a coach that is keenly aware of social issues and actively embodies values of social justice. Tip is rooted in his self awareness, cultural competence, and a systems-thinking approach...Tip can challenge me to shift the things that are within my power to shift. It is through his understanding that I was able to question my mental conditioning and push beyond limits that I or others have imposed on me. Tip has helped me examine and articulate my value, solidify my unique philosophy... and ultimately leverage my strategic advantages.”</p>
                                <p>- Nyacko Pearl Perry, MSOD, 500-RYT, Founder, Yin Consulting LLC</p>
                            </div>
                            <p>Greatest Availability: 9:00am-2:00pm Mon; 9:00am-5:00pm Tues,Wed,Fri; 9:00am-12pm, 4:00-5:00pm Thu</p>
                        </div>
                    </div>
                    <div name='robbinProfile' className='profileContainer'>
                        <img src={robbinHeadshot} alt='Robin Hudson' className='linkedHeadshots'/>
                        <div>
                            <h2>Robbin Hudson, MBA, CPDC (she/her/hers)</h2>
                            <p>Robbin Hudson is a principled leader who personally and professionally embodies diversity, equity, and inclusion. Her passion for building liberated and equitable institutions led her to found Gradient A Human Equity Think Tank, a coaching and consulting firm that centers human equity.</p>
                            <p>With over 20 years of experience, Robbin employs a honed set of intellectual and leadership skills that include strategy development, coaching, management consulting, and grant-making. Robbin’s core belief is that the values, vision, voice, and actions of stakeholders across all levels of a system are required to stand up transformative strategies to end anti-Black injustice and intersectional-identity oppression in favor of a just world where all people flourish.</p>
                            <p>Robbin holds a Bachelor of Arts in Economics and International Relations from Mount Holyoke College and a Master of Business Administration from the Case Western Reserve University, Weatherhead School of Management. Robbin is a Certified Professional Diversity Coach (CPDC), accredited by the International Coaching Federation (ICF). Robbin trained with Dr. Towanna Burrous at the CoachDiversity Institute.</p>
                            <div className='testimonialContainer'>
                                <p>"I would describe Robbin’s coaching in three words: Inspirational, Perceptive, and Transformational. Robbin has been an invaluable tool in my personal growth and the growth of our organization. She carefully listens  to our ambitious goals, challenges us to think even bigger, and then validates our success plans... I can highly recommend Robbin to anyone looking for the perfect blend of visionary, mentor, strategist, and cheerleader."</p>
                                <p>- Alex Robertson, Executive Director at Recess Cleveland | Executive Director of the Re-Inspire Foundation</p>
                            </div>
                            <p>Greatest Availability: 6:00am-8:00pm Mon-Fri, 11:00am-5:00pm Sat</p>
                        </div>
                    </div>
                    <div name='amaraProfile' className='profileContainer'>
                        <img src={amaraHeadshot} alt='Amara Lynch' className='linkedHeadshots'/>
                        <div>
                            <h2>Amara Lynch, MEd, CPDC (she/her/hers)</h2>
                            <p>Amara approaches her work as a coach and consultant with compassion and curiosity. She balances expertise and a strong library of resources with an openness to new ideas and a commitment to continuous learning. Amara’s work is customized to the needs and circumstances of her clients but is always oriented towards the same purpose: a more equitable, just world in which all people can flourish and prosper.</p>
                            <p>Over the past years, Amara has become a student of inclusive leadership and growth. She is a Certified Professional Diversity Coach through CoachDiversity Institute, accredited by the International Coaching Federation (ICF) and has the privilege of learning from Adult Development experts, including Dr. Robert Kegan, as the Director of Programs at the organizational development consulting firm The Developmental Edge.</p>
                            <p>Amara holds a Bachelor's degree in International Relations from Tufts University and a Master’s degree in Education with International Baccalaureate certification from Bethel University.</p>
                            <p>Amara is passionate about her family and loves spending time with her husband, Mike, and two young sons, Asher and Emmett. She lives in Atlanta, GA but doesn’t let anyone forget that she is a “Mainer” at heart.</p>
                            <div className='testimonialContainer'>
                                <p>"Amara is an extremely powerful coach. She knows exactly the right questions to ask so that I don't swirl in my headspace. Her intuition is spot on and helped me to move to action much sooner than I would ever expect. I especially appreciate Amara's passion for equity. Maintaining the highest standards of fairness, justice, and inclusiveness are so at her core that they resonate organically and without tension. The world would be a far better place if everyone had Amara to accompany them."</p>
                                <p>- Consulting Firm Founder</p>
                            </div>
                            <p>Greatest Availability: 7:00-8:00am, 12:00-2:30pm, 6:30-8:30pm Mon-Fri</p>
                        </div>
                    </div>
                    <div name='victorProfile' className='profileContainer'>
                        <img src={victorHeadshot} alt='Victor A. Ruiz' className='linkedHeadshots'/>
                        <div>
                            <h2>Victor A. Ruiz, M. ED, CPDC (he/him/his)</h2>
                            <p>Victor A. Ruiz is a courageous leader and advocate with a body of work that spans over twenty years. He is an Executive Director, Coach, Consultant, and active member of his community. As Executive Director of Esperanza, Inc., an organization founded in 1983 to advocate on behalf of and improve the academic achievements of Hispanics in Greater Cleveland, the organization has grown tremendously and has been a leader in addressing the educational needs of Cleveland’s Latinx community. Victor’s Coaching and Consulting practice focuses on working with individuals and organizations to help them recognize their power and potential and use it to benefit themselves and their community.</p>
                            <p>Victor lives in Cleveland with his wife and three children. He a graduate of the Cleveland School System, has a Bachelor of English from Baldwin Wallace College, and a Master of Education from Cleveland State University. He is a Certified Professional Diversity Coach (CPDC) through the CoachDiversity Institute. He serves on several boards including The Cuyahoga Community College and the United Way of Greater Cleveland. Victor is also a W.K. Kellogg Foundation Fellow, where he completed a 3-year fellowship focusing on racial equity and healing.</p>
                            <div className='testimonialContainer'>
                                <p>“I completely endorse the coaching that I received from Victor Ruiz. The sessions have helped me to understand and identify opportunities to change my perspective, to tap into my strengths to create a vision for my success, and to develop tactical plans to take action steps to accomplish my goals. Victor facilitates our sessions with encouragement and thought provoking questions to help me to strategize for my own journey. He does not direct or control the conversation, and creates a safe and comfortable environment, allowing me to be candid and transparent about myself.”</p>
                                <p>- Stacey M.</p>
                            </div>
                            <p>Greatest Availability: 8:00am-8:00pm Mon-Fri</p>
                        </div>
                    </div>
                    <div name='heatherProfile' className='profileContainer'>
                        <img src={heatherHeadshot} alt='Heather Sattler' className='linkedHeadshots'/>
                        <div>
                            <h2>Heather Sattler, MPS, CPDC (she/her/hers)</h2>
                            <p>Heather Sattler inspires awareness to ignite action in both organizations and individuals. She is fervent about equal access to opportunity for all. Among her passions is providing training and coaching on hiring, supervising, mentoring, and sponsoring people outside of dominant in-groups.</p>
                            <p>With a commitment to curiosity over judgement, Heather helps clients increase their competence when it comes to understanding, engaging with, and supporting people who are different from them. Clients can count on her to help them with their interpersonal relationships as well as their ability to identify and pull the levers that activate systemic change within their organizations.</p>
                            <p>Following a career in nonprofit management and public service, Heather founded Arusha Consulting, which provides coaching and consulting services related to leadership, people management, and equity, diversity, and inclusion. For nearly a decade, Heather taught human resources management as an adjunct instructor for DePaul University’s Graduate School of Public Service Management and All Hallows College in Dublin, Ireland. Both programs are international by design.</p>
                            <p>Heather is a Certified Professional Diversity Coach through CoachDiversity Institute, accredited by the International Coaching Federation (ICF) and a Gold Status Tiara International Certified Coach. She is also a Qualified Administrator of the Intercultural Development Inventory (IDI) Assessment. She earned a Bachelor of Science Degree in Foreign Service from Georgetown University and a Master of Science Degree in Public Service Management from DePaul University.</p>
                            <div className='testimonialContainer'>
                                <p>"Heather has a specific talent for working with members of dominant in-groups to help them see through the results they desire when it comes to diversity, equity, and inclusion no matter their starting point. ... Her grasp of the coach approach to inclusion, its potency and the nuances involved in delivering the best possible coaching interactions ensure that clients interested in transformational coaching will find success with her. With an entire academic and professional career dedicated to equity and social justice, I believe that Heather’s role as a certified diversity coach is having the deepest and most widespread impact."</p>
                                <p>- Dr. Towanna Burrrous, Founder & President, CoachDiversity Institute</p>
                            </div>
                            <p>Greatest Availability: 9:00am-9:00pm Mon-Fri</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                <div className='copyrightContainer'>
                    <p>Copyright 2020 - Arusha Consulting</p>
                    <LinkRouter to='/privacy-policy'>Privacy Policy</LinkRouter>
                </div>
            </footer>
            </>
        )
    }
}