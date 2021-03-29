import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [fade, setOpacity] = useState(0);
  const [moveName, setOffsetYName] = useState(0);
  
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const handleScrollOpacity = () => setOpacity(window.pageYOffset);
const handleName = () => window.pageYOffset>=300?setOffsetYName(window.pageYOffset-300):setOffsetYName(0);




useEffect(()=>{
  window.addEventListener("scroll", handleName);

  return () => window.removeEventListener("scroll", handleName);
}, []);

  useEffect(()=>{
    window.addEventListener("scroll", handleScrollOpacity);

    return () => window.removeEventListener("scroll", handleScrollOpacity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
   
        <h1 className="header"
        style={{opacity: `${1- fade *.005}`}}
        // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >
          <p style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>H</p>
          <p style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>e</p>
          <p style={{ transform: `translateY(${offsetY * 0.2}px)` }}>l</p>
          <p style={{ transform: `translateY(${offsetY * 0.3}px)` }}>l</p>
          <p style={{ transform: `translateY(${offsetY * 0.5}px)` }} >o</p>
        </h1>
<section className= 'box-one'>
      <div className="box b1">
        <span className="b1-content">
      <h2 
      style={{ transform: `translateX(-${moveName *.2}px)` }}>
        I'm Oz</h2>
        <p style={{ transform: `translateX(${moveName *0.2}px)` }}>
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
        <h2>Box 3</h2>
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
      <div className="box b4">
        <h2>Box 4</h2>
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
