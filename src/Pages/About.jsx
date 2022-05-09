import React from 'react';
import '../Styles/Pages/About.css';
import placeholder from '../Assets/placeholder.svg';

function About() {
  return (
    <div className="about_main">
      <section className="about_text_container" id="about">
        <h1 className="about_title">QUEM É LAIZA?</h1>
        <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam nesciunt totam ea voluptatem perferendis vel perspiciatis quae pariatur quaerat consequatur, sequi omnis distinctio esse, harum odit. Sapiente, obcaecati est!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam nesciunt totam ea voluptatem perferendis vel perspiciatis quae pariatur quaerat consequatur, sequi omnis distinctio esse, harum odit. Sapiente, obcaecati est!</p>
      </section>
      <section className="about_image_container">
        <img className="about_image" alt="placeholder" src={placeholder} />
      </section>
    </div>
  );
}

export default About;
