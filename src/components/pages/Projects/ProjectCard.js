import React from 'react';
import gitLogo from './assets/git-logo.png';

export default function ProjectCard({ projData }) {
  return (
    <div className='proj-card-container'>
      {projData.map((proj) => (
        <div className='proj-card' key={proj.key} style={{
          backgroundImage: `url("${proj.imgPath}")`
          }}>
          <div className='hide'>
            <a
              className='proj-title'
              href={proj.deployed}
              target="_blank"
              rel="noreferrer">
                {proj.title}
            </a>
            <a
              className='repo-link'
              href={proj.repo}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gitLogo}
                alt="git logo"
                width="50"
                heigth="50">
              </img>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}