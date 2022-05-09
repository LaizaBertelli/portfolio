import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { DiChrome } from 'react-icons/di';

function ProjectDetails() {
  return (
    <div className="project_details_main">
      <section className="image_container" />
      <section className="project_infos">
        <h2>PROJETO 1</h2>
        <div className="project_techs">
          <span>tech 1</span>
          <span>tech 2</span>
          <span>tech 3</span>
        </div>
        <div className="project_links">
          <AiFillGithub />
          <DiChrome />
        </div>
      </section>
      <section className="project_description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, blanditiis
          voluptas explicabo dolorem tempora laborum et corporis modi iste praesentium minima
          exercitationem, amet rerum qui sequi placeat ullam, vel sit!
        </p>
      </section>
    </div>
  );
}

export default ProjectDetails;
