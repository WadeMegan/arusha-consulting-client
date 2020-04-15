import React, { Component } from 'react'
import './FairgroundAssetsPage.css'

export default class FairgroundAssetsPage extends Component{
    render(){
        return(
            <>
            <nav>
                <h1>Fairground Assets</h1>
            </nav>
            <section className='hero'>
                <h2>WOW <br/> Fairground <br/> Assets <br/>is <br/> GREEEAAAAT!</h2>
                <p>Whatever you want to put in here.</p>
            </section>
            <section className='aboutFairground'>
                <h3>About Fairground Assets</h3>
                <p>Explain what Fairground Assets is and why it exists.</p>
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