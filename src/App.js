import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';

import { useState, useEffect, useRef } from 'react';
import ContactForm from './Components/Contents/ContactForm';

import { Routes, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [buttonView, setButtonView] = useState(true)

  const pageTop = useRef(null)

  const [scrollSection, setScrollSection] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const request = params.get('request');
    
    if (request != null && request == 1) {
      setShowForm(true)
      setButtonView(false)
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
          setScrolled(true);
      } else {
          setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zoomLevel = scrollY * 0.0009; 
  const transformStyle = `scale(${1 + zoomLevel})`;

  const identity_Scroller =async( selected )=> {
    await setScrollSection(selected)
    setScrollSection('')
  }

  const view_Form =()=> {
    setShowForm(!showForm)
  }

  useEffect(() => {
    if(scrollSection == 'home') {
      pageTop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [scrollSection]);

  return (
    <div className={showForm? "App-Stop":"App"}>
      <Router>
          <Routes>
              <Route path='/' element={
                  <div className="Main-Web-Site">
                      <div className={showForm? "Show-Form":"Hide-Form"}>
                        <ContactForm hide_Popup={view_Form} Status={showForm} Handler={buttonView}/>
                      </div>
      
                      <div className="Hero-Image"  style={{ transform: transformStyle }}>
                          <div className={scrolled?"Scrolled-Hero-Body":"Align-Hero"}/>
                      </div>

                      <div className="Header-Margin" ref={pageTop}/>

                      <Header scroll_Wanted={identity_Scroller} get_Form={view_Form}/>
                      <Body Section={scrollSection} get_Form={view_Form}/>
                      <Footer scroll_Wanted={identity_Scroller} get_Form={view_Form}/>
                  </div>
              } />
            </Routes>
      </Router>  
    </div>
  );
}

export default App;
