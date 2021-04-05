import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import wekendSS1 from '../images/wekend-screenshot-1.png'
import wekendSS2 from '../images/wekend-screenshot-2.png'
import wekendSS3 from '../images/wekend-screenshot-3.png'
import wekendlogo from '../images/wekend-logo.png'
import "./WEkend.css";

function WEkend() {
    const [screenshot, setScreenshot] = useState(0)
    let screenshots = [[wekendSS1, 'Users events are organized by day easily accessed on their day-board'],
    [wekendSS2, 'Users can see all events they and their friends have posted' ],
    [wekendSS3,'User can see all their friends along with their friendship status']]
    const displayScreenshot = (screenshot) => {
        return screenshots[screenshot][0]
    }
    const displayScreenshotCaption = (screenshot) => {
        return screenshots[screenshot][1]
    }
    const renderContent = () => (
        <>
        <div className='banner wekend'>
         <article tabIndex='0' className="app-one-flip">
                        <div className="app-one-inner">
                            <div className="app-one-front">
                                <h2 className='header-wekend'>WEkend</h2>
                            </div>
                            <div className="app-one-back flip-wekend">
                                <p>The name combines 'We' and 'Weekend'</p>
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
                                       
                                    <i className="fas calendar-alt"><FontAwesomeIcon className='calendar-alt icon' icon='calendar-alt' /></i>
                                            <br />
                                <p className='category-label'>planning</p>
                                    </div>
                                    <div className='logo-link'>
                                       
                                    <i className="fas fa-users"><FontAwesomeIcon className='user icon' icon='users' /></i>
                                            <br />
                                <p className='category-label'>social</p>
                                    </div>
                                </div>
                            </article>
  
                            <article className="app-one app-links-container">
                                <h4>LINKS</h4>
                                <div className='logo-links'>
                                <div className='logo-link'>
                            <a href='https://github.com/ozharb/Wekend-client' rel="noreferrer" target="_blank">
                                <i className="fab fa-github-alt"><FontAwesomeIcon icon={["fab", "github-alt"]} /></i>
                                <br />
                                Github</a>
                        </div>
                        <div className='logo-link'>
                            <a href='https://wekend-client-ozharb.vercel.app/' rel="noreferrer" target="_blank">
                                <img src={wekendlogo} width="35" alt='wekend app logo' />
                                <br />
live app</a>
                        </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article className="app-one">
                        <h2>Description</h2>
                        <p>A social event planning app where users can post events for friends to see as well as see and rsvp events their friends have posted.</p>
                    </article>
                    <article className="app-one">
                        <h2> Inspiration</h2>
                        <p>I miss my friends. I think we all do. The pandemic kept us away from friends and reminded us that weekends aren't the same without them.</p>
                    <p>I wanted to create an app that makes planning weekends with friends easy to help us makes the most of the little time we get to spend with them.</p>
                    <p>Instead of having to ask what each person is up to, what if you just knew? That's the question that got me building this project.</p>
                    </article>
                    <article className="app-one">
                        <h2>Tech</h2>
                        <div className='app-left-right'>
                            <div className='app-left front-end-list'>
                                <ul>Front End</ul>
                                <li>Reactjs</li>
                                <li>HTML5</li>
                                <li>CSS3 (vanilla)</li>
                                <li>Testing with Jest</li>
                                <li>Deployed via Vercel</li>
                            </div>
                            <div className='app-right'>
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
                            <button onClick={() => setScreenshot(screenshot > 0 ? screenshot - 1 : screenshots.length - 1)}>
                                <i className="fa chevron-circle-left"><FontAwesomeIcon icon={["fa", "chevron-circle-left"]} /></i>
                                <br/>
                                back
                            </button>

                        </div>
                        <div className='slideshow-button'>
                            <button onClick={() => setScreenshot(screenshot < screenshots.length - 1 ? screenshot + 1 : 0)}>
                            <br/>
                                <i className="fa chevron-circle-right"><FontAwesomeIcon icon={["fa", "chevron-circle-right"]} /></i>
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
export default WEkend;