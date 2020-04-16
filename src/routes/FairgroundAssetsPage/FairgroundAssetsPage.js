import React, { Component } from 'react'
import './FairgroundAssetsPage.css'

export default class FairgroundAssetsPage extends Component{
    render(){
        return(
            <>
            <div className='heroBanner'>
                <div className='heroText'>
                    <nav>
                        <div className='title'>
                            <h1>Fairground Assets</h1>
                            <h2>By Arusha Consulting</h2>
                        </div>
                        <div className='socialMediaIcons'>
                            <a href='https://www.facebook.com/arushaconsulting/' target='_blank'><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href='https://www.linkedin.com/company/arusha-consulting-inc/' target='_blank'><i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </nav>
                    
                    <div className='heroMessage'>
                        <p>CREATING A <br/> FAIR GROUND <br/> FOR ALL.</p>
                    </div>

                </div>
                <div className='heroImage'>
                    <div className='heroOverlay'>
                    </div>
                </div>
            
            
            </div>
            <div className='heroOverlay'>
                    {/*<nav>
                        <div className='title'>
                            <h1>Fairground Assets</h1>
                            <h2>By Arusha Consulting</h2>
                        </div>
                        <div className='socialMediaIcons'>
                            <a href='https://www.facebook.com/arushaconsulting/' target='_blank'><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href='https://www.linkedin.com/company/arusha-consulting-inc/' target='_blank'><i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </nav>
                    
                    <div className='heroText'>
                        <p>CREATING A <br/> FAIR GROUND <br/> FOR ALL.</p>
                    </div>*/}
                <section className='hero home'>
                    {/*<h2>WOW <br/> Fairground <br/> Assets <br/>is <br/> GREEEAAAAT!</h2>
                    <p>Whatever you want to put in here.</p>*/}
                </section>
            </div>
            {/*<section className='hero home'>
                <h2>WOW <br/> Fairground <br/> Assets <br/>is <br/> GREEEAAAAT!</h2>
                <p>Whatever you want to put in here.</p>
                </section>*/}
            <section className='aboutFairground'>
                <h3>About Fairground Assets</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum. Curabitur vitae nunc sed velit dignissim sodales. Adipiscing at in tellus integer feugiat scelerisque varius. Amet cursus sit amet dictum sit amet justo donec enim. Non pulvinar neque laoreet suspendisse interdum.</p>
                <p>Tortor pretium viverra suspendisse potenti. Posuere morbi leo urna molestie at elementum eu facilisis. Nibh sit amet commodo nulla facilisi nullam. Gravida in fermentum et sollicitudin ac orci phasellus. Nulla porttitor massa id neque aliquam vestibulum. Morbi leo urna molestie at elementum eu facilisis sed. Ipsum suspendisse ultrices gravida dictum fusce ut. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p>
                <button onClick={()=> window.open("https://airtable.com/shryac37gVnAcjPJg", "_blank")}>Submit A Resource</button>
            </section>
            <section className='resourcesSection'>
                <h3>Resources</h3>
                <p>Anything you want to note about the resources or how to use them?</p>
                <div className="airtableContainer">
                    <iframe className="airtable-embed" src="https://airtable.com/embed/shr17e3l41PiK7Pfa?backgroundColor=blue" frameBorder="0" width="100%" height="533"></iframe>
                </div>
            </section>
            <footer>
                <p>Footer with whatever you want in it.</p>
            </footer>
            </>
        )
    }
}