import React, { Component } from 'react'
import './GsCoachesPage.css'
import {Link as LinkRouter} from 'react-router-dom'
import { Link } from 'react-scroll'
import heatherHeadshot from '../../images/gs-coaches/heather.png'
import amaraHeadshot from '../../images/gs-coaches/amara.png'
import victorHeadshot from '../../images/gs-coaches/victor.png'


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
                    <p>Arusha is pleased to offer the following outstanding coaches from our community of coaches. Please review their bios, testimonials, and availability to select two coaches you would like to meet during a 15-minute inquiry session. Note all times are listed in Central Time.</p>
                    <p>Email your selections to <a href = "mailto:Heather@arushainc.com">Heather</a> and she will send you the necessary information to schedule your inquiry sessions. We appreciate your quick action so that you can stay on track to begin your coaching sessions as soon as March 8. If you have any questions or need additional support, please reach out to <a href = "mailto:Heather@arushainc.com">Heather</a>.</p>
                </div>
                <div className='linkContainer'>
                    <h2>Meet the Coaches</h2>
                    <Link to="heatherProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={heatherHeadshot} alt='Heather Sattler' className='linkedHeadshots'/>
                    </Link> 
                    <Link to="victorProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={victorHeadshot} alt='Victor A. Ruiz' className='linkedHeadshots'/>
                    </Link>
                    <Link to="amaraProfile" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                        <img src={amaraHeadshot} alt='Amara Lynch' className='linkedHeadshots'/>
                    </Link>
                </div>
                <div className='profileSection'>
                    <div name='heatherProfile' className='profileContainer'>
                        <img src={heatherHeadshot} alt='Heather Sattler' className='linkedHeadshots'/>
                        <div>
                            <h2>Heather Sattler (she/her/hers)</h2>
                            <p>Heather Sattler inspires awareness to ignite action in both organizations and individuals. She is fervent about equal access to opportunity for all. Among her passions is providing training and coaching on hiring, supervising, mentoring, and sponsoring people outside of dominant in-groups.</p>
                            <p>Heather enjoys helping her clients align their actions with their vision and values to achieve a greater good. She relies on her strengths of awakening spirit, bringing out potential, and serving as a purveyor of depth in a light-hearted way to provide transformative experiences for those with whom she works.</p>
                            <p>Following a career in non-profit management and public service, Heather founded Arusha Consulting, which provides coaching and consulting services related to leadership, people management, and equity, diversity, and inclusion.</p>
                            <p>Heather’s academic career reflects her life-long dedication to working with underrepresented groups. Her undergrad degree at Georgetown University’s School of Foreign Service included a year in the Dominican Republic and a certificate in Latin American Studies. Her thesis was on race and identity in the Dominican Republic. Her seminar project was on financial credit for women in Sub-Saharan Africa. Heather received a Master of Science degree in Public Service Management from DePaul University. Her practicum looked at the efficacy of programs dedicated to helping adolescent and teen girls excel.</p>
                            <p>For nearly a decade, Heather taught human resources management as an adjunct instructor for DePaul University’s Graduate School of Public Service Management and All Hallows College in Dublin, Ireland. Both programs are international by design.</p>
                            <p>Heather is a Certified Professional Diversity Coach through CoachDiversity Institute, accredited by the International Coaching Federation (ICF) and a Gold Status Tiara International Certified Coach.</p>
                            <div className='testimonialContainer'>
                                <p>"Heather has a specific talent for working with members of dominant in-groups to help them see through the results they desire when it comes to diversity, equity, and inclusion no matter their starting point. She is also gifted at working with women from all backgrounds to help them overcome obstacles and excel in every manner.</p>
                                <p>Her grasp of the coach approach to inclusion, its potency and the nuances involved in delivering the best possible coaching interactions ensure that clients interested in transformational coaching will find success with her....</p>
                                <p>With an entire academic and professional career dedicated to equity and social justice, I believe that Heather’s role as a certified diversity coach is having the deepest and most wide-spread impact. We are proud to have her in the CoachDiversity family."</p>
                                <p>- Dr. Towanna Burrrous, Founder & President, CoachDiversity Institute</p>
                            </div>
                            <p>Availability: 9:00am-9:00pm Mon-Fri</p>
                        </div>
                    </div>
                    <div name='victorProfile' className='profileContainer'>
                        <img src={victorHeadshot} alt='Victor A. Ruiz' className='linkedHeadshots'/>
                        <div>
                            <h2>Victor A. Ruiz, M. ED, CPDC (he/him/his)</h2>
                            <p>Victor A. Ruiz is a courageous leader and advocate with a body of work that spans over twenty years. He is an Executive Director, Coach, Consultant, and active member of his community.   As Executive Director of Esperanza, Inc., an organization founded in 1983 to advocate on behalf of and improve the academic achievements of Hispanics in Greater Cleveland, the organization has grown tremendously and has been a leader in addressing the educational needs of Cleveland’s Latinx community.  Victor’s Coaching and Consulting practice focuses on working with individuals and organizations to help them recognize their power and potential and use it to benefit themselves and their community.</p>
                            <p>Victor lives in Cleveland with his wife and three children. He a graduate of the Cleveland School System, has a bachelor’s degree in English from Baldwin Wallace College, and a Master’s Degree in Education from Cleveland State University. He is a Certified Professional Diversity Coach (CPDC) through the CoachDiversity Institute.  He serves on several boards including The Cuyahoga Community College and the United Way of Greater Cleveland.  Victor is also a W.K. Kellogg Foundation Fellow, where he completed a 3-year fellowship focusing on racial equity and healing.</p>
                            <div className='testimonialContainer'>
                                <p>“I completely endorse the coaching that I received from Victor Ruiz. The sessions have helped me to understand and identify opportunities to change my perspective, to tap into my strengths to create a vision for my success, and to develop tactical plans to take action steps to accomplish my goals. Victor facilitates our sessions with encouragement and thought provoking questions to help me to strategize for my own journey. He does not direct or control the conversation, and creates a safe and comfortable environment, allowing me to be candid and transparent about myself.”</p>
                                <p>- Stacey M.</p>
                            </div>
                            <p>Availability: 8:00 am to 8 pm Mon-Fri</p>
                        </div>
                    </div>
                    <div name='amaraProfile' className='profileContainer'>
                        <img src={amaraHeadshot} alt='Amara Lynch' className='linkedHeadshots'/>
                        <div>
                            <h2>Amara Lynch (she/her/hers)</h2>
                            <p>Amara approaches her work as a coach and consultant with compassion and curiosity. She balances expertise and a strong library of resources with an openness to new ideas and a commitment to continuous learning. Amara’s work is customized to the needs and circumstances of her clients but is always oriented towards the same purpose: a more equitable, just world in which all people can flourish and prosper.</p>
                            <p>Over the past years, Amara has become a student of inclusive leadership and growth. She is a Certified Professional Diversity Coach through CoachDiversity Institute, accredited by the International Coaching Federation (ICF) and has the privilege of learning from Adult Development experts, including Dr. Robert Kegan, as the Director of Programs at the organizational development consulting firm The Developmental Edge. </p>
                            <p>Amara holds a bachelor's degree in International Relations from Tufts University and a master’s degree in Education with International Baccalaureate certification from Bethel University.</p>
                            <p>Amara is passionate about her family and loves spending time with her husband, Mike, and two young sons, Asher and Emmett. She lives in Atlanta, GA but doesn’t let anyone forget that she is a “Mainer” at heart.</p>
                            <div className='testimonialContainer'>
                                <p>"I began walking this path with you at just the right moment. Now I see the way fears paralyze us and do not let us move forward. I also see that we can address our fears to improve personally and professionally and in this way help everyone around us.</p>
                                <p>Thank you for helping me discover and develop what I am capable of achieving."</p>
                                <p>- Anonymous Client</p>
                                <p>"Amara is an extremely powerful coach. She knows exactly the right questions to ask so that I don't swirl in my headspace. Her intuition is spot on and helped me to move to action much sooner than I would ever expect.</p>
                                <p>I especially appreciate Amara's passion for equity. Maintaining the highest standards of fairness, justice, and inclusiveness are so at her core that they resonate organically and without tension.</p>
                                <p>The world would be a far better place if everyone had Amara to accompany them."</p>
                                <p>- Consulting Firm Founder</p>
                            </div>
                            <p>Availability: 8:00-9:00am, 1:00-3:30pm, 7:30-9:30pm Mon-Fri</p>
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