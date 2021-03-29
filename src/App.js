import React, { useState, useEffect } from "react";
import photoMe from './images/photo-me.jpeg';
import wekendLogo from './images/wekend-logo.png'
// import PreloadImage from 'react-preload-image'
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [fade, setOpacity] = useState(0);
  const [moveName, setOffsetYName] = useState(0);
  const [moveSections, setOffsetYSections] = useState(0);
  const [moveLastP, setOffsetYLastP] = useState(0);
  const [moveProjectsHeader, setOffsetYProjectsHeader] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleSections = () => window.pageYOffset >= 720 ? setOffsetYSections(window.pageYOffset - 720) : setOffsetYSections(0);
  const handleScrollOpacity = () => setOpacity(window.pageYOffset);
  const handleName = () => window.pageYOffset >= 300 ? setOffsetYName(window.pageYOffset - 300) : setOffsetYName(0);
  const handleLastP = () => window.pageYOffset >= 1100 ? setOffsetYLastP(window.pageYOffset - 1100) : setOffsetYLastP(0);
  const handleProjects = () => window.pageYOffset >= 1700 ? setOffsetYProjectsHeader(window.pageYOffset - 1700) : setOffsetYProjectsHeader(0);  

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
      <div className="box b2">
        <p>
          About Me
        </p>
        <p>
          Projects
        </p>
        <p>
          Contact
        </p>
      </div>

      <div className="box b3">
        <img
          style={{ transform: `translateY(-${moveSections * .7}px)` }}
          src={photoMe} width="300"
          className="photo-me"
          alt="my face" />
        <article className='about-me-content-headers'>

          <div className='b3-left-right'>
            <div className='b3-left'
              style={{
                transform: `translateX(-${moveSections * .4}px)`,
                opacity: `${moveSections * .003}`
              }}>
              <p>Where I've been</p>
            </div>
            <div className='b3-right'
              style={{
                transform: `translateX(${moveSections * .4}px)`,
                opacity: `${moveSections * .003}`
              }}>
              <p>Where I'm going</p>
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
      <div className="box b4">
        <h2>
         <p className='projects-one'style={{ transform: `translateY(10px) translateY(-${moveProjectsHeader * 0.5}px)
         translateX(-${moveProjectsHeader * 0.2}px)
         `,
        }}>P</p>
        <p className='projects-two' style={{ transform: `translateY(-10px) translateY(${moveProjectsHeader * 0.2}px)
       translateX(${moveProjectsHeader * 0.2}px)
       `
      }}>r</p>
        <p className='projects-three'style={{ transform: `translateY(10px)translateY(-${moveProjectsHeader * 0.1}px)
        translateX(-${moveProjectsHeader * 0.2}px)`
         }}>o</p>
        <p className='projects-four'style={{ transform: `translateY(-10px)translateY(${moveProjectsHeader * 0.2}px)
        translateX(${moveProjectsHeader * 0.2}px)
        ` 
      }}>j</p>
        <p className='projects-five'style={{ transform: `translateY(10px)translateY(-${moveProjectsHeader * 0.3}px)
        translateX(-${moveProjectsHeader * 0.2}px)
        ` 
        }} >e</p>
        <p className='projects-six'style={{ transform: `translateY(-10px)translateY(${moveProjectsHeader * 0.1}px)
         translateX(${moveProjectsHeader * 0.2}px)
         ` 
        }}>c</p>
        <p className='projects-seven'style={{ transform: `translateY(10px)translateY(-${moveProjectsHeader * 0.2}px)
        translateX(-${moveProjectsHeader * 0.2}px)
        ` 
        }}>t</p>
        <p className='projects-eight'style={{ transform: `translateY(-10px)translateY(${moveProjectsHeader * 0.3}px)
         translateX(${moveProjectsHeader * 0.2}px)` 
        }} >s</p>
        </h2>
        <img
          // style={{ transform: `translateY(-${moveSections * .7}px)` }}
          src={wekendLogo} width="200"
          className="logo"
          alt="wekend app logo" />
          <p>WEkend</p>
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
      <div className="box b5">
        <h2>Box 5</h2>
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
      <div className="box b6">
        <h2>Box 6</h2>
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
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
