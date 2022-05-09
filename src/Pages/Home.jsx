import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Header from '../Components/Header';
import ContactBtn from '../Components/ContactBtn';
import Footer from '../Components/Footer';
import About from './About';
import Projects from './Projects';

function Home() {
  return (
    <main className="main">
      <Header />
      <div className="home">
        <div className="home_headline">
          <section className="headline_image_container" />
          <section className="headline_text_container">
            <div className="headline_title">
              <h1>LAIZA BERTELLI</h1>
              <h6>Desenvolvedora Front-end</h6>
            </div>
            <div className="social_media_links">
              <AiFillGithub />
              <AiFillLinkedin />
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
