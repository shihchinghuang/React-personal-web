import React from 'react';
import '../styles/styles.css';

const Project = ({ data }) => {
  return (
    <>
      <div className="project">
        <img src={data.img} alt="" />
        <div className="info">
          <p>{data.title}</p>
          <a target="_blank" href={data.repo} rel="noreferrer">
            GitHub Repo
          </a>
          <a target="_blank" href={data.pages} rel="noreferrer">
            GitHub Pages
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
