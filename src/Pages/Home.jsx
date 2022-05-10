import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Header from '../Components/Header';
import ContactBtn from '../Components/ContactBtn';
import Footer from '../Components/Footer';
import About from './About';
import Projects from './Projects';
import '../Styles/Pages/Home.css';
import darkImg from '../Assets/dark.png';
// import lightImg from '../Assets/light.png';

function Home() {
  return (
    <main className="main">
      <Header />
      <div className="home" id="home">
        <div className="home_headline">
          <section className="headline_image_container">
            <img className="headline_pic" src={darkImg} alt="placeholder text" />
          </section>
          <section className="headline_text_container">
            <div className="headline_title">
              <h1>
                {'LAIZA  '}
                <span>{'<BERTELLI />'}</span>
              </h1>
              <h6>Desenvolvedora Front-end</h6>
            </div>
            <div className="social_media_links">
              <AiFillGithub size="60" style={{ margin: '10px' }} />
              <AiFillLinkedin size="60" style={{ margin: '10px' }} />
            </div>
            <ContactBtn />
          </section>
        </div>
      </div>
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
