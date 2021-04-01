import React, {useState} from "react";
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
    [spacedRepStart, 'Users see all the words to practice' ],
    [spacedRepTranslate,'Order of words to practice use the spaced-reptition learning technique'],
[spacedRepCorrect, 'User gets feedback upon entering their guess']]
const displayScreenshot = (screenshot) => {  
    return screenshots[screenshot][0]
      }
const displayScreenshotCaption = (screenshot) => {  
        return screenshots[screenshot][1]
          }  
    const renderContent = () => (
        <>
             <section className='projects-left'>
            <section className='app-main app-info'>

                <article tabIndex='0' className="app-one-flip">
                    <div className="app-one-inner">

                        <div className="app-one-front">

                            <h2>Spaced-Repetition</h2>
                        </div>
                    
                        <div className="app-one-back">
                            <p>Named after the learning teqchnique</p>
                        </div>
                    </div>
                   
                </article>
                <article className="app-one">
                <p >Full Stack App</p>
                            <p>Language Learning</p>
                            <div className='app-icons'>
                                <i className="fas fa-user"><FontAwesomeIcon className='user icon' icon='user' /></i>
                                <i className="fas dollar-sign"><FontAwesomeIcon className='dollar-sign icon' icon='dollar-sign' /></i>
                            </div>
                </article>
            
                <article className="app-one">
                    <h2>Description</h2>
                    <p>A financial planning app where users can create mini budgets to caclulate personal expenses.</p>
                </article>
                <article className="app-one">
                    <h2> Inspiration</h2>
                    <p >My favorite part of online shopping is adding things to my cart.</p>
                    <p>Online shopping carts are always the best way to calculate costs but they're not great at dynamic planning or staying organized.</p>
                    <p>I wanted this app to build on what I like about online shopping with the added bonus of personal organization.</p>
                </article>
                <article className="app-one">
                    <h2>Tech</h2>
                    <ul>Front End</ul>
                    <li>Reactjs</li>
                    <li>HTML5</li>
                    <li>CSS3 (vanilla)</li>
                    <li>Testing with Jest</li>
                    <li>Deployed via Vercel</li>
                    <ul>Back End</ul>
                    <li>Node and Express</li>
                    <ul>
                        <li>Authentication via JWT</li>
                        <li>RESTful Api</li>
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
                </article>
                <article className="app-one">
                    <h2>Links</h2>
                    <div className='logo-links'>


                        <div className='logo-link'>
                            <a href='https://github.com/ozharb/BudGitz-client' rel="noreferrer" target="_blank">
                                <i className="fab fa-github-alt"><FontAwesomeIcon icon={["fab", "github-alt"]} /></i>
                                <br />
github</a>
                        </div>
                        <div className='logo-link'>
                            <a href='https://budgitz-client-ozharb.vercel.app/' rel="noreferrer" target="_blank">
                                <img src={spacedRepLogo} width="35" alt='wekend app logo' />
                                <br />
live app</a>
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
                        <button onClick = {()=>setScreenshot(screenshot>0?screenshot-1:screenshots.length-1)}>
                            <i className="fa chevron-circle-left"><FontAwesomeIcon icon={["fa", "chevron-circle-left"]} /></i>
                        </button>
                        <label>back</label>
                    </div>
                    <div className='slideshow-button'>
                    <button onClick = {()=>setScreenshot(screenshot<screenshots.length-1?screenshot+1:0)}>
                            <i className="fa chevron-circle-right"><FontAwesomeIcon icon={["fa", "chevron-circle-right"]} /></i>
                        </button>
                        <label>next</label>
                    </div>
                </div>
           
            </div>
            </section>
        </>
    );
    return (
        <>
            <div className="main-app-content">{renderContent()}</div>
        </>
    )
}
export default SpacedRep;