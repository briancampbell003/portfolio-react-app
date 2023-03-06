import ProjectCard from './ProjectCard';
import React from 'react';
import DreamJotBG from './assets/dreamJot.png';
import TeamGenBG from './assets/teamGen.png';
import TechBuzzBG from './assets/techBuzz.png';
import WeatherDashBG from './assets/weatherDash.png';
import MhlReloBG from './assets/mhlRelo.png';
import VaristasDigitalCafeBG from './assets/varistasDigitalCafe.png';
import NoteTakerBG from './assets/noteTaker.png';

export default function Projects() {
  const projData = [
    {
      title: 'MHL Relocation Guide',
      deployed: 'https://briancampbell003.github.io/mhl-rs-relocation/',
      repo: 'https://github.com/briancampbell003/mhl-rs-relocation',
      imgPath: MhlReloBG,
      key: '01',
      description: 'Informative React app built for Resident Services Staff at Mercy Housing Lakefront',
      tech: 'JavaScript, ReactJS, HMTL, CSS'
    },
    {
      title: 'Dream Jot',
      deployed: 'https://dream-jot.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/dream-jot',
      imgPath: DreamJotBG,
      key: '02',
      description: 'Digital dream journal with community features',
      tech: 'Sequelize, ExpressJS, Handlebars'
    },
    {
      title: 'Team Profile Generator',
      deployed: 'https://briancampbell003.github.io/module-10-team-profile-demo/',
      repo: 'https://github.com/briancampbell003/module-10-team-profile-generator',
      imgPath: TeamGenBG,
      key: '03',
      description: 'Command-line application to create stylized page once provided with team member info',
      tech: 'Jest, NodeJS, Inquirer, CSS'
    },
    // {
    //   title: 'Weather Dash',
    //   deployed: 'https://briancampbell003.github.io/weather-dash/',
    //   repo: 'https://github.com/briancampbell003/weather-dash',
    //   imgPath: WeatherDashBG,
    //   key: '03',
    //   description: 'Forecast provider using API call to weather app based on user input',
    //   tech: 'JavaScript, HMTL, CSS'
    // },
    {
      title: 'Varistas Digital Cafe',
      deployed: 'https://briancampbell003.github.io/varistas-digital-cafe/',
      repo: 'https://github.com/briancampbell003/varistas-digital-cafe',
      imgPath: VaristasDigitalCafeBG,
      key: '04',
      description: '',
      tech: ''
    },
    {
      title: 'TechBuzz',
      deployed: 'https://techbuzz.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/tech-buzz',
      imgPath: TechBuzzBG,
      key: '05',
      description: '',
      tech: ''
    },
    {
      title: 'Note Taker',
      deployed: 'https://protected-mesa-67604.herokuapp.com/notes',
      repo: 'https://github.com/briancampbell003/module-11-note-taker',
      imgPath: NoteTakerBG,
      key: '06',
      description: '',
      tech: ''
    },
  ]

  console.log('img path var', DreamJotBG)
  return (
    <div>
      <h1>→ Projects</h1>
      <div>
        <ProjectCard projData={projData} />
      </div>
    </div>
  );
}
