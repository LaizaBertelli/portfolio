import React from 'react';
import '../Styles/Components/ProjectDetails.css';
import { AiFillGithub } from 'react-icons/ai';
import { DiChrome } from 'react-icons/di';

function ProjectDetails() {
  return (
    <div className="project_details_main">
      <section className="image_container" />
      <section className="project_infos_container">
        <section className="project_infos">
          <h2>PROJETO 1</h2>
          <div className="project_techs">
            <span>tech 1</span>
            <span>tech 2</span>
            <span>tech 3</span>
          </div>
          <div className="project_links">
            <AiFillGithub size="70" style={{ margin: '5px 20px' }} />
            <DiChrome size="70" style={{ margin: '5px 20px' }} />
          </div>
        </section>
        <section className="project_description_container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, blanditiis
            voluptas explicabo dolorem tempora laborum et corporis modi iste praesentium minima
            exercitationem, amet rerum qui sequi placeat ullam, vel sit!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, blanditiis
            voluptas explicabo dolorem tempora laborum et corporis modi iste praesentium minima
            exercitationem, amet rerum qui sequi placeat ullam, vel sit!
          </p>
        </section>
      </section>
    </div>
  );
}

export default ProjectDetails;
