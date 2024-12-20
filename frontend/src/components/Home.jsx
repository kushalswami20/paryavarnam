import React, { useRef, useEffect, useState } from 'react';
import './css/Home.css';
import video from "../assets/sample video.mp4"
import Footer from './shared/Footer';

const Home = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageCount = 3;

  useEffect(() => {
    const container = containerRef.current;
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Incremental scroll with smaller steps
      const scrollStep = 0.03;
      
      if (e.deltaY > 0) {
        setScrollProgress(prev => Math.min(prev + scrollStep, pageCount - 1));
      } else {
        setScrollProgress(prev => Math.max(prev - scrollStep, 0));
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="scroll-container">
      {/* Right Side Progress Bar */}
      {/* <div className="progress-bar">
        <div className="progress-track">
          <div 
            className="progress-thumb"
            style={{
              height: `${(1 / pageCount) * 100}%`,
              top: `${(scrollProgress / (pageCount - 1)) * 100}%`
            }}
          />
        </div>
        <div className="progress-number">
          {Math.floor(scrollProgress + 1)} / {pageCount}
        </div>
      </div> */}

      {/* Main Content */}
      <div 
        ref={containerRef} 
        className="page-container"
        style={{ 
          transform: `translateX(-${scrollProgress * 100}%)`,
          width: `${pageCount * 33.3333333}%`
        }}
      >
        <div className="page page-1">
          <div className="video-overlay">
            <video 
              className="background-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="page-content">
            <h1>Sample</h1>
            <p>Smooth Incremental Scrolling</p>
          </div>
        </div>

        <div className="page page-2">
          <div className="page-content">
            <h1>Discover</h1>
            <p>Gradual Page Transitions</p>
          </div>
        </div>

        <div className="page page-3">
          <div className="page-content">
            <h1>Experience</h1>
            <p>Seamless Navigation</p>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;