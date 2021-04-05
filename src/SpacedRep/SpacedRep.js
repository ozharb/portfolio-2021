import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import spacedRepCorrect from '../images/spaced-rep-screenshot-correct.png'
import spacedRepLogin from '../images/spaced-rep-screenshot-login.png'
import spacedRepStart from '../images/spaced-rep-screenshot-start.png'
import spacedRepTranslate from '../images/spaced-rep-translate-word.png'
import spacedRepLogo from '../images/spacedrep-logo.png'
import "./SpacedRep.css";

function SpacedRep() {
    const [screenshot, setScreenshot] = useState(0)
    let screenshots = [[spacedRepLogin, 'secure login via JWT'],
    [spacedRepStart, 'Users see all the words to practice'],
    [spacedRepTranslate, 'Words to practice are ordered by the spaced-repetition learning technique'],
    [spacedRepCorrect, 'User gets feedback upon entering their guess']]

    const displayScreenshot = (screenshot) => {
        return screenshots[screenshot][0]
    }
    const displayScreenshotCaption = (screenshot) => {
        return screenshots[screenshot][1]
    }
    const renderContent = () => (
        <>
        <div className='banner spacedrep'>
         <article tabIndex='0' className="app-one-flip">
                        <div className="app-one-inner">
                            <div className="app-one-front">
                                <h2 >Spaced-Repetition</h2>
                            </div>
                            <div className="app-one-back">
                                <p>Named after the learning technique</p>
                            </div>
                        </div>
                    </article>
                    <h3>Full Stack App</h3>
                    </div>
                    <div className='app-left-right'>

           
            <section className='projects-left'>
                <section className='app-main app-info'>

                    <article className="app-one">
                        <div className='app-left-right'>
                        <article className="app-one app-links-container">
                                <h4>CATEGORIES</h4>
                                <div className='logo-links'>
                                    <div className='logo-link'>
                                       
                                        <i className="fas fa-user"><FontAwesomeIcon className='user icon' icon='user' /></i>
                                            <br />
                    <p className='category-label'>user-login</p> 
                                    </div>
                                    <div className='logo-link'>
                                       
                                    <i className="fas brain"><FontAwesomeIcon className='brain icon' icon='brain' /></i>
                                            <br />
                                <p className='category-label'>learning</p>
                                    </div>
                                </div>
                            </article>
  
                            <article className="app-one app-links-container">
                                <h4>LINKS</h4>
                                <div className='logo-links'>
                                <div className='logo-link'>              
                                <a href='https://github.com/ozharb/spaced-repetition' rel="noreferrer" target="_blank">
                                    <i className="fab fa-github-alt"><FontAwesomeIcon icon={["fab", "github-alt"]} /></i>
                                    <br />
                                    Github</a>
                            </div>
                            <div className='logo-link'>
                                <a href='https://spaced-repetition-ozharb.vercel.app/' rel="noreferrer" target="_blank">
                                    <img src={spacedRepLogo} width="35" alt='spaced-repetition app logo' />
                                    <br />
                                live app</a>
                            </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article className="app-one">
                        <h2>Description</h2>
                        <p>A language learning app for practicing translations for a given set of words.</p>
                    </article>
                    <article className="app-one">
                    <h2>Project Highlights</h2>
                        <p>This project was started with an existing codebase for the front and backend along with tests not yet passing.</p>
                        <p>The spaced-repetition learning technique is implemented using an algorithm and a linked list data structure.</p>
                        <p>The algorithm orders words with more incorrect guesses ahead of words with fewer incorrect answers. This forces the user to practice words they are struggling with more often than other words.</p>
                        <p>In addition to using an algorithm to implement the learning technique, the app also uses a linked list to store and order the data.</p>
                        <p>Correct guesses force words to get pushed back in the linked list further than words with incorrect guesses.</p>
                        <p>I enjoyed working with a linked list for this project which I found to be perfect for this type of data.</p>
                    </article>
                    <article className="app-one">
                        <h2>Tech</h2>
                        <div className='app-left-right'>
                            <div className='app-left front-end-list'>
                            <ul>Front End</ul>
                        <li>Reactjs</li>
                        <li>HTML5</li>
                        <li>CSS3 (vanilla)</li>
                        <li>Testing with Cypress</li>
                        <li>Deployed via Vercel</li>
                            </div>
                            <div className='app-right back-end-list'>
                             <ul>Back End</ul>
                        <li>Node and Express</li>
                        <ul>
                            <li>Authentication via JWT</li>
                            <li>RESTful API</li>
                        </ul>
                        <li>Testing:</li>
                        <ul>
                            <li>Supertest (integration)</li>
                            <li>Mocha and Chai (unit)</li>
                        </ul>
                        <li>Database</li>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>Knex.js - SQL wrapper</li>
                        </ul>
                        <li>Deployed via Heroku</li>
                            </div>
                        </div>
                    </article>

                </section>
            </section>
            <section className='projects-right'>
                <h3>Screenshots</h3>
                <div className='captions-container'>
                    <p className='screenshot-caption'>{displayScreenshotCaption(screenshot)}</p>
                </div>
                <div className='screenshot-carousel'>
                    <section className='budgitz-main app-border'>
                        <img src={displayScreenshot(screenshot)} width='290' alt='app screenshot of dayboard' />
                    </section>
                    <div className='slideshow-buttons-container'>
                        <div className='slideshow-button'>
                            <button onClick={() => setScreenshot(screenshot > 0 ? screenshot - 1 : screenshots.length - 1)}
                            type='button'>
                                <i className="fa chevron-circle-left"><FontAwesomeIcon icon={["fa", "chevron-circle-left"]} /></i>
                                <br/>
                                back
                            </button>

                        </div>
                        <div className='slideshow-button'>
                            <button onClick={() => setScreenshot(screenshot < screenshots.length - 1 ? screenshot + 1 : 0)}
                            type='button'>
                                <i className="fa chevron-circle-right"><FontAwesomeIcon icon={["fa", "chevron-circle-right"]} /></i>
                                <br/>
                                next
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
    return (
        <>
            <div className="main-app-content">{renderContent()}</div>
        </>
    )
}
export default SpacedRep;