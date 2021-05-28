import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photoMe from "./images/photo-me.jpeg";
import wekendLogo from "./images/wekend-logo.png";
import budgitzLogo from "./images/budgitz-logo.png";
import spacedRepLogo from "./images/spacedrep-logo.png";
import contactMe from "./images/contact-me.png";
import Budgitz from "./Budgitz/Budgitz";
import WEkend from "./WEkend/WEkend";
import SpacedRep from "./SpacedRep/SpacedRep";

import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [fade, setOpacity] = useState(0);
  const [moveName, setOffsetYName] = useState(0);
  const [moveSections, setOffsetYSections] = useState(0);
  const [moveLastP, setOffsetYLastP] = useState(0);
  const [moveProjectsHeader, setOffsetYProjectsHeader] = useState(0);
  const [moveProjectsHeaderMobile, setOffsetYProjectsHeaderMobile] = useState(
    0
  );

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleSections = () =>
    window.pageYOffset >= 900
      ? setOffsetYSections(window.pageYOffset - 900)
      : setOffsetYSections(0);
  const handleScrollOpacity = () => setOpacity(window.pageYOffset);
  const handleName = () =>
    window.pageYOffset >= 300
      ? setOffsetYName(window.pageYOffset - 300)
      : setOffsetYName(0);
  const handleLastP = () =>
    window.pageYOffset >= 1100
      ? setOffsetYLastP(window.pageYOffset - 1100)
      : setOffsetYLastP(0);

  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = (e) => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  const handleProjects = () =>
    window.pageYOffset >= 1700
      ? setOffsetYProjectsHeader(window.pageYOffset - 1700)
      : setOffsetYProjectsHeader(0);

  const handleProjectsMobile = () =>
    window.pageYOffset >= 2850
      ? setOffsetYProjectsHeaderMobile(window.pageYOffset - 2850)
      : setOffsetYProjectsHeaderMobile(0);

  useEffect(() => {
    window.addEventListener("scroll", handleSections);

    return () => window.removeEventListener("scroll", handleSections);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleName);

    return () => window.removeEventListener("scroll", handleName);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollOpacity);

    return () => window.removeEventListener("scroll", handleScrollOpacity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleLastP);

    return () => window.removeEventListener("scroll", handleLastP);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleProjects);
    return () => window.removeEventListener("scroll", handleProjects);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleProjectsMobile);
    return () => window.removeEventListener("scroll", handleProjectsMobile);
  }, []);

  //Nav Bar//
  const aboutMe = React.createRef();
  const projects = React.createRef();
  const contact = React.createRef();
  const budgitz = React.createRef();
  const spacedrep = React.createRef();
  const wekend = React.createRef();

  const scrollToAboutMe = () => {
    aboutMe.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToContact = () => {
    contact.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const scrollToBudgitz = () => {
    budgitz.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToWekend = () => {
    wekend.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToSpacedRep = () => {
    spacedrep.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderContent = () => (
    <>
      <h1 className="header" style={{ opacity: `${1 - fade * 0.005}` }}>
        <p style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>H</p>
        <p style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>e</p>
        <p style={{ transform: `translateY(${offsetY * 0.2}px)` }}>l</p>
        <p style={{ transform: `translateY(${offsetY * 0.3}px)` }}>l</p>
        <p style={{ transform: `translateY(${offsetY * 0.5}px)` }}>o</p>
      </h1>
      <section className="box-one">
        <div className="box b1">
          <span className="b1-content">
            <h2 style={{ transform: `translateX(-${moveName * 0.2}px)` }}>
              I'm Oz
            </h2>
            <p style={{ transform: `translateX(${moveName * 0.2}px)` }}>
              Nice to meet you.
            </p>
          </span>
        </div>
      </section>
      <div className="b2 navbar">
        <button onClick={() => scrollToAboutMe()}>About Me</button>
        <button onClick={() => scrollToProjects()}>Projects</button>
        <button onClick={() => scrollToContact()}>Contact</button>
      </div>

      <div className="box b3 about-me" ref={aboutMe}>
        <div className="photo-circles">
          <img
            style={{
              transform: `translateY(-${
                isMobile ? moveSections * 0.002 : moveSections * 0.6
              }px)`,
              opacity: `${1 - moveSections * 0.003}`,
            }}
            src={photoMe}
            width="300"
            className="photo-me"
            alt="my face"
          />
          <div
            style={{
              transform: `translateY(-${
                isMobile ? moveSections * 0.002 : moveSections * 0.5
              }px)`,
              opacity: `${
                isMobile
                  ? 2.5 - moveSections * 0.002
                  : 1.5 - moveSections * 0.002
              }`,
            }}
            width="300"
            className="creative-circle-red"
          />
          <div
            style={{
              transform: `translateY(-${
                isMobile ? moveSections * 0.001 : moveSections * 0.4
              }px)`,
              opacity: `${
                isMobile ? 5.5 - moveSections * 0.003 : 2 - moveSections * 0.002
              }`,
            }}
            width="300"
            className="creative-circle-blue"
          />
        </div>

        <article className="about-me-content-container">
          <section
            className="about-me-content"
            style={{ transform: `translateY(${moveSections * 0.15}px)` }}
          >
            <div className="photo-container">
              <img
                src={photoMe}
                width="300"
                className="mobile-photo-me"
                alt="my face"
              />
            </div>
            <p> Born and raised in Seattle... </p>
            <p>
              I studied biology and art at Seattle University then jumped into
              the world of immigration law to help families like mine make a
              home here.
            </p>
            <p>
              As a paralegal, I got to help Software Engineers and other
              professionals in the tech industry get their green cards giving me
              a unique perspective on the technology and talent it takes to
              create great software.
            </p>
            <p>
              The years I spent learning about software piqued my interest in
              learning how to code and build my own projects.
            </p>

            <div className="mobile-photo-books" />

            <p>
              Getting a Software Engineering certificate at Thinkful not only
              gave me the skills I need to be a strong developer but also
              solidified my passion for building great software for people.
            </p>
            <p>
              I'm excited about continuing my journey in the field of software
              and web development and boldly going where I've never gone before.
            </p>
            <p
              className="last-para"
              style={{
                transform: `translateY(${
                  isMobile ? moveLastP * 0.05 : moveLastP * 0.15
                }px)`,
              }}
            >
              Don't hesitate to reach out so we can get to work. I can't wait to
              team up with people and build some cool stuff.
            </p>
            <div
              className="last-para-mobile"
              style={{
                transform: `translateY(${
                  isMobile ? moveLastP * 0.05 : moveLastP * 0.15
                }px)`,
              }}
            >
              <div
                className="mobile-photo-mission-control"
                style={{ opacity: `${-2.7 + moveSections * 0.002}` }}
              />
              <p>
                Don't hesitate to reach out so we can get to work. I can't wait
                to team up with people and build some cool stuff.
              </p>
            </div>
          </section>
        </article>
      </div>
      <div className="b4" ref={projects}>
        <h2 className="projects-header" id="projects-container">
          <p
            className="projects-one"
            style={{
              transform: `translateY(10px) translateX(10px) translateY(-${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
         translateX(-${
           isMobile
             ? moveProjectsHeaderMobile * 0.03
             : moveProjectsHeader * 0.03
         }px)`,
            }}
          >
            P
          </p>

          <p
            className="projects-two"
            style={{
              transform: `translateY(-10px) translateX(-10px) translateY(${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
       translateX(${
         isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03
       }px)`,
            }}
          >
            r
          </p>

          <p
            className="projects-three"
            style={{
              transform: `translateY(10px) translateX(10px) translateY(-${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
        translateX(-${
          isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03
        }px)`,
            }}
          >
            o
          </p>

          <p
            className="projects-four"
            style={{
              transform: `translateY(-10px) translateX(-10px) translateY(${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
        translateX(${
          isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03
        }px)`,
            }}
          >
            j
          </p>

          <p
            className="projects-five"
            style={{
              transform: `translateY(10px) translateX(10px) translateY(-${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
        translateX(-${
          isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03
        }px)`,
            }}
          >
            e
          </p>

          <p
            className="projects-six"
            style={{
              transform: `translateY(-10px) translateX(-10px) translateY(${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
         translateX(${
           isMobile
             ? moveProjectsHeaderMobile * 0.03
             : moveProjectsHeader * 0.03
         }px)`,
            }}
          >
            c
          </p>

          <p
            className="projects-seven"
            style={{
              transform: `translateY(10px) translateX(10px) translateY(-${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
        translateX(-${
          isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03
        }px)`,
            }}
          >
            t
          </p>

          <p
            className="projects-eight"
            style={{
              transform: `translateY(-10px) translateX(-10px) translateY(${
                isMobile
                  ? moveProjectsHeaderMobile * 0.03
                  : moveProjectsHeader * 0.03
              }px)
         translateX(${
           isMobile
             ? moveProjectsHeaderMobile * 0.03
             : moveProjectsHeader * 0.03
         }px)`,
            }}
          >
            s
          </p>
        </h2>
        <div className="logos">
          <div className="logo-button">
            <button onClick={() => scrollToBudgitz()}>
              <img
                src={budgitzLogo}
                width="100"
                className="logo"
                alt="Budgitz app logo"
              />
            </button>
            <label>BudGitz</label>
          </div>
          <div className="logo-button">
            <button onClick={() => scrollToSpacedRep()}>
              <img
                src={spacedRepLogo}
                width="100"
                className="logo"
                alt="spaced-repetition app logo"
              />
            </button>
            <label>
              Spaced-
              <br />
              Repetition
            </label>
          </div>
          <div className="logo-button">
            <button onClick={() => scrollToWekend()}>
              <img
                src={wekendLogo}
                width="100"
                className="logo"
                alt="wekend app logo"
              />
            </button>
            <label>WEkend</label>
          </div>
        </div>
        <article className="project-content-window">
          <section className="budgitz" ref={budgitz}>
            <Budgitz />
          </section>
          <section className="spaced-rep" ref={spacedrep}>
            <SpacedRep />
          </section>

          <section className="wekend" ref={wekend}>
            <WEkend />
          </section>
        </article>
      </div>
      <div className="b5 contact" ref={contact}>
        <h2>Contact Me</h2>
        <section className="contact-me-left-right">
          <ul className="contact-me-left">
            <li>
              <i className="fas contact-icon fa-phone-alt">
                <FontAwesomeIcon className="phone-alt icon" icon="phone-alt" />
              </i>
              206.962.1815
            </li>
            <li>
              <i className="fas contact-icon fa-envelope">
                <FontAwesomeIcon className="envelope icon" icon="envelope" />
              </i>
              ozharb@gmail.com
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/osman-harb/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab contact-icon fa-linkedin">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </i>
                linkedin.com/ozharb
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ozharb/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab contact-icon fa-github-square">
                  <FontAwesomeIcon icon={["fab", "github-square"]} />
                </i>
                github.com/ozharb
              </a>
            </li>
          </ul>
          <div className="contact-me-right">
            <img
              className="contact-me-img"
              src={contactMe}
              width="120"
              alt="cartoon winky face"
            />
          </div>
        </section>
      </div>
    </>
  );

  return (
    <section className="App">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />

      <div
        className="circle-1"
        style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
      ></div>
      <div className="main__content">{renderContent()}</div>
    </section>
  );
}

export default App;
