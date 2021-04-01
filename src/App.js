import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoMe from './images/photo-me.jpeg';
import wekendLogo from './images/wekend-logo.png';
import budgitzLogo from './images/budgitz-logo.png';
import spacedRepLogo from './images/spacedrep-logo.png';
import contactMe from './images/contact-me.png'
import Budgitz from './Budgitz/Budgitz'
import WEkend from './WEkend/WEkend'
import SpacedRep from './SpacedRep/SpacedRep'

// import PreloadImage from 'react-preload-image'
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [fade, setOpacity] = useState(0);
  const [moveName, setOffsetYName] = useState(0);
  const [moveSections, setOffsetYSections] = useState(0);
  const [moveLastP, setOffsetYLastP] = useState(0);
  const [moveProjectsHeader, setOffsetYProjectsHeader] = useState(0);
  const [moveProjectsHeaderMobile, setOffsetYProjectsHeaderMobile] = useState(0);
  const [projectDisplay, setProjectDisplay] = useState('')

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleSections = () => window.pageYOffset >= 850 ? setOffsetYSections(window.pageYOffset - 850) : setOffsetYSections(0);
  const handleScrollOpacity = () => setOpacity(window.pageYOffset);
  const handleName = () => window.pageYOffset >= 300 ? setOffsetYName(window.pageYOffset - 300) : setOffsetYName(0);
  const handleLastP = () => window.pageYOffset >= 1100 ? setOffsetYLastP(window.pageYOffset - 1100) : setOffsetYLastP(0);



  const handleProjectDisplay = (project) => {
    setProjectDisplay(project)

  }
  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 700px)');

  const handleProjects = () => window.pageYOffset >= 1400 ? setOffsetYProjectsHeader(window.pageYOffset - 1400) : setOffsetYProjectsHeader(0)

  const handleProjectsMobile = () => window.pageYOffset >= 1650 ? setOffsetYProjectsHeaderMobile(window.pageYOffset - 1650) : setOffsetYProjectsHeaderMobile(0)

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
  const aboutMe = React.createRef()
  const projects = React.createRef()
  const contact = React.createRef()

  const scrollToAboutMe = () => {
    aboutMe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  const scrollToProjects = () => {
    projects.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  const scrollToContact = () => {
    contact.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
  const displayProject = () => {
    if (projectDisplay === 'Budgitz') {
      return <Budgitz />
    } else if (projectDisplay === 'Spaced-Repetition') {
      return <SpacedRep />
    } else if (projectDisplay === 'Wekend') {
      return <WEkend />
    } else {
      return <p className='pick-project'>Choose a project to learn more.</p>
    }
  }
  const renderContent = () => (
    <>

      <h1 className="header"
        style={{ opacity: `${1 - fade * .005}` }}
      // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <p style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>H</p>
        <p style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>e</p>
        <p style={{ transform: `translateY(${offsetY * 0.2}px)` }}>l</p>
        <p style={{ transform: `translateY(${offsetY * 0.3}px)` }}>l</p>
        <p style={{ transform: `translateY(${offsetY * 0.5}px)` }} >o</p>
      </h1>
      <section className='box-one'>
        <div className="box b1">
          <span className="b1-content">
            <h2
              style={{ transform: `translateX(-${moveName * .2}px)` }}>
              I'm Oz</h2>
            <p style={{ transform: `translateX(${moveName * 0.2}px)` }}>
              Nice to meet you.
        </p>
          </span>
        </div>
      </section>
      <div className="b2 navbar">
        < button onClick={() => scrollToAboutMe()}>
          About Me
        </button>
        <button onClick={() => scrollToProjects()}>
          Projects
        </button>
        <button onClick={() => scrollToContact()}>
          Contact
        </button>
      </div>

      <div className="box b3 about-me" ref={aboutMe} >
        <div className = 'photo-circles'>

     
        <img
          style={{ transform: `translateY(${moveSections * .95}px)`,
          opacity: `${1- moveSections * .003}` }}
          src={photoMe} width="300"
          className="photo-me"
          alt="my face" />
           <div
          style={{ transform: `translateY(${moveSections * .95}px)`,
          opacity: `${1- moveSections * .001}`}}
        width="300"
          className="creative-circle-red"
      />
         <div
          style={{ transform: `translateY(${moveSections * .95}px)`}}
        width="300"
          className="creative-circle-blue"
      />
         </div>
         
        <article className='about-me-content-headers'>

          <div className='b3-left-right'>
            <div className='b3-left'
              style={{
                transform: `translateX(-${moveSections * .4}px)`,
                opacity: `${1- moveSections * .001}`
              }}>
              <p>Creative</p>
            </div>
            <div className='b3-right'
              style={{
                transform: `translateX(${moveSections * .4}px)`,
                opacity: `${1- moveSections * .001}`
              }}>
              <p>Developer</p>
            </div>
          </div>
          <section
            className='about-me-content'
            style={{ transform: `translateY(-${moveSections * .2}px)` }}
          >
            <p>
              Born and raised in Seattle...
        </p>
            <p>
              I studied biology and art at Seattle University then jumped into the world of immigration law to help families like mine make a home here.
        </p>
            <p>As a paralegal, I got to help Software Engineers and other professionals in the tech industry get their green cards giving me a unique perspective on the technology and talent it takes to create great software.</p>
            <p>The years I spent learning about software peeked my interst in learning code and building my own projects.</p>
            <p>Getting a Software Enginnering certificate at Thinkful verified my ability in, and passion for, coding and developing software that helps people and makes the world better.</p>
            <p
              style={{ transform: `translateY(${moveLastP * .15}px)` }}
            >Don't hesitate to reach out so we can get to work. I can't wait to team up with people and build some cool stuff.</p>
          </section>
        </article>
      </div>
      <div className="b4" ref={projects} >

        <h2 className='projects-header'>

          <p className='projects-one' style={{
            transform: `translateY(10px) translateX(5px) translateY(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
         translateX(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`,
          }}>P</p>

          <p className='projects-two' style={{
            transform: `translateY(-10px) translateX(-10px) translateY(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
       translateX(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }}>r</p>

          <p className='projects-three' style={{
            transform: `translateY(10px) translateX(5px) translateY(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
        translateX(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }}>o</p>

          <p className='projects-four' style={{
            transform: `translateY(-10px) translateX(-10px) translateY(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
        translateX(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }}>j</p>

          <p className='projects-five' style={{
            transform: `translateY(10px) translateX(5px) translateY(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
        translateX(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }} >e</p>

          <p className='projects-six' style={{
            transform: `translateY(-10px) translateX(-10px) translateY(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
         translateX(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }}>c</p>

          <p className='projects-seven' style={{
            transform: `translateY(10px) translateX(5px) translateY(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
        translateX(-${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }}>t</p>

          <p className='projects-eight' style={{
            transform: `translateY(-10px) translateX(-5px) translateY(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)
         translateX(${isMobile ? moveProjectsHeaderMobile * 0.03 : moveProjectsHeader * 0.03}px)`
          }} >s</p>

        </h2>
        <div className='logos'>
          <div className='logo-button'>
            <button onClick={() => handleProjectDisplay('Wekend')}>
              <img
                src={wekendLogo} width="100"
                className="logo"
                alt="wekend app logo" />
            </button>
            <label>WEkend</label>
          </div>
          <div className='logo-button'>
            <button onClick={() => handleProjectDisplay('Budgitz')}>
              <img
                // style={{ transform: `translateY(-${moveSections * .7}px)` }}
                src={budgitzLogo} width="100"
                className="logo"
                alt="Budgits app logo" />
            </button>
            <label>Budgitz</label>
          </div>
          <div className='logo-button'>
            <button onClick={() => handleProjectDisplay('Spaced-Repetition')}>
              <img
                // style={{ transform: `translateY(-${moveSections * .7}px)` }}
                src={spacedRepLogo} width="100"
                className="logo"
                alt="spaced-repetition app logo" />
            </button>
            <label>Spaced-Repetition</label>
          </div>
        </div>
        <article className='project-content-window'>
          {displayProject()}
        </article>

      </div>
      <div className="b5 contact" ref={contact} >
        <h2>Contact Me</h2>
        <section className='contact-me-left-right'>
          <ul className='contact-me-left'>
        <li>
        <i className="fas contact-icon fa-phone-alt"><FontAwesomeIcon className='phone-alt icon' icon='phone-alt' /></i>
        206.962.1815
        </li>
        <li>
        <i className="fas contact-icon fa-envelope"><FontAwesomeIcon className='envelope icon' icon='envelope' /></i>
        ozharb@gmail.com
        </li>
        <li><a href='https://www.linkedin.com/in/osman-harb/' rel="noreferrer" target="_blank">
        <i className="fab contact-icon fa-linkedin"><FontAwesomeIcon icon={["fab", "linkedin"]} /></i>
        linkedin.com/osmanharb
        </a>
        </li>
        <li>
          <a href='https://github.com/ozharb/' rel="noreferrer" target="_blank">
        <i className="fab contact-icon fa-github-square"><FontAwesomeIcon icon={["fab", "github-square"]} /></i>
        github.com/ozharb/
        </a>
        </li>
        </ul>
        <div className='contact-me-right'>
          <img className = 'contact-me-img' src={contactMe} width='300' alt='cartoon winky face'/>
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
      {/* <div
        className="Parallax__background-triangles"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      /> */}
      {/* <section className='images-background'>
       <div
        className="skyline sky-one"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
        <div
        className="skyline sky-two"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
            <div
        className="skyline sky-three"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
            <div
        className="skyline sky-four"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
            <div
        className="skyline sky-five"
      style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
      
      </section> */}
      <div className='circle-1'
        style={{ transform: `translateY(-${offsetY * 0.4}px)` }}>
      </div>
      <div className="main__content">{renderContent()}</div>

    </section>
  );
}

export default App;
