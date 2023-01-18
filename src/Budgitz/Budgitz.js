import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import budgitzSS1 from "../images/budgitz-screenshot-1.png";
import budgitzSS2 from "../images/budgitz-screenshot-2.png";
import budgitzSS3 from "../images/budgitz-screenshot-3.png";
import budgitzLogo from "../images/budgitz-logo.png";
import "./Budgitz.css";

function Budgitz() {
  const [screenshot, setScreenshot] = useState(0);
  let screenshots = [
    [budgitzSS1, "User's home page"],
    [budgitzSS2, "secure login via JWT"],
    [budgitzSS3, "User can create and edit BudGitz easily"],
  ];
  const displayScreenshot = (screenshot) => {
    return screenshots[screenshot][0];
  };
  const displayScreenshotCaption = (screenshot) => {
    return screenshots[screenshot][1];
  };
  const renderContent = () => (
    <>
      <div className="banner budgitz">
        <article tabIndex="0" className="app-one-flip">
          <div className="app-one-inner">
            <div className="app-one-front">
              <h2>BudGitz</h2>
            </div>
            <div className="app-one-back">
              <p>Pronounced just like 'budgets'</p>
            </div>
          </div>
        </article>
        <h3>Full Stack App</h3>
      </div>
      <div className="app-left-right">
        <section className="projects-left">
          <section className="app-main app-info">
            {/* <article tabIndex='0' className="app-one-flip">
                        <div className="app-one-inner">
                            <div className="app-one-front">
                                <h2>BudGitz</h2>
                            </div>
                            <div className="app-one-back">
                                <p>Pronounced just like 'budgets'</p>
                            </div>
                        </div>
                    </article> */}
            <article className="app-one">
              <div className="app-left-right">
                <article className="app-one app-links-container">
                  <h4>CATEGORIES</h4>
                  <div className="logo-links">
                    <div className="logo-link">
                      <i className="fas fa-user">
                        <FontAwesomeIcon className="user icon" icon="user" />
                      </i>
                      <br />
                      <p className="category-label">user-login</p>
                    </div>
                    <div className="logo-link">
                      <i className="fas dollar-sign">
                        <FontAwesomeIcon
                          className="dollar-sign icon"
                          icon="dollar-sign"
                        />
                      </i>
                      <br />
                      <p className="category-label">budgeting</p>
                    </div>
                  </div>
                </article>

                <article className="app-one app-links-container">
                  <h4>LINKS</h4>
                  <div className="logo-links">
                    <div className="logo-link">
                      <a
                        href="https://github.com/ozharb/BudGitz-client"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github-alt">
                          <FontAwesomeIcon icon={["fab", "github-alt"]} />
                        </i>
                        <br />
                        GitHub
                      </a>
                    </div>
                    <div className="logo-link">
                      <a
                        href="https://budgitz-client-ozharb.vercel.app/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={budgitzLogo}
                          width="35"
                          alt="wekend app logo"
                        />
                        <br />
                        live app
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article className="app-one">
              <h2>Description</h2>
              <p>
                A financial planning app where users can create mini budgets to
                calculate personal expenses.
              </p>
            </article>
            <article className="app-one">
              <h2> Inspiration</h2>
              <p>
                My favorite part of online shopping is adding things to my cart.
              </p>
              <p>
                Online shopping carts are always the best way to calculate costs
                but they're not great at dynamic planning or staying organized.
              </p>
              <p>
                I wanted this app to build on what I like about online shopping
                with the added bonus of personal organization.
              </p>
            </article>
            <article className="app-one">
              <h2>Tech</h2>
              <div className="app-left-right">
                <div className="app-left front-end-list">
                  <ul>Front End</ul>
                  <li>Reactjs</li>
                  <li>HTML5</li>
                  <li>CSS3 (vanilla)</li>
                  <li>Testing with Jest</li>
                  <li>Deployed via Vercel</li>
                </div>
                <div className="app-right back-end-list">
                  <ul>Back End</ul>
                  <li>Node.js and Express</li>
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
                  <li>Deployed via Render</li>
                </div>
              </div>
            </article>
          </section>
        </section>
        <section className="projects-right">
          <h3>Screenshots</h3>
          <div className="captions-container">
            <p className="screenshot-caption">
              {displayScreenshotCaption(screenshot)}
            </p>
          </div>
          <div className="screenshot-carousel">
            <section className="budgitz-main app-border">
              <img
                src={displayScreenshot(screenshot)}
                width="290"
                alt="app screenshot of dayboard"
              />
            </section>
            <div className="slideshow-buttons-container">
              <div className="slideshow-button">
                <button
                  onClick={() =>
                    setScreenshot(
                      screenshot > 0 ? screenshot - 1 : screenshots.length - 1
                    )
                  }
                >
                  <i className="fa chevron-circle-left">
                    <FontAwesomeIcon icon={["fa", "chevron-circle-left"]} />
                  </i>
                  <br />
                  back
                </button>
              </div>
              <div className="slideshow-button">
                <button
                  onClick={() =>
                    setScreenshot(
                      screenshot < screenshots.length - 1 ? screenshot + 1 : 0
                    )
                  }
                >
                  <i className="fa chevron-circle-right">
                    <FontAwesomeIcon icon={["fa", "chevron-circle-right"]} />
                  </i>
                  <br />
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
  );
}
export default Budgitz;
