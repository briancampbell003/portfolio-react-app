import ProjectCard from './ProjectCard';
import React from 'react';
import DreamJotBG from './assets/dreamJot.png';
import TeamGenBG from './assets/teamGen.png';
import TechBuzzBG from './assets/techBuzz.png';
import WeatherDashBG from './assets/weatherDash.png';
import VaristasDigitalCafeBG from './assets/varistasDigitalCafe.png';
import NoteTakerBG from './assets/noteTaker.png';

export default function Projects() {
  const projData = [
    {
      title: 'Dream Jot',
      deployed: 'https://dream-jot.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/dream-jot',
      imgPath: DreamJotBG,
      key: '01',
    },
    {
      title: 'Team Profile Generator',
      deployed: 'https://briancampbell003.github.io/module-10-team-profile-demo/',
      repo: 'https://github.com/briancampbell003/module-10-team-profile-generator',
      imgPath: TeamGenBG,
      key: '02',
    },
    {
      title: 'Weather Dash',
      deployed: 'https://briancampbell003.github.io/weather-dash/',
      repo: 'https://github.com/briancampbell003/weather-dash',
      imgPath: WeatherDashBG,
      key: '03',
    },
    {
      title: 'Varistas Digital Cafe',
      deployed: 'https://briancampbell003.github.io/varistas-digital-cafe/',
      repo: 'https://github.com/briancampbell003/varistas-digital-cafe',
      imgPath: VaristasDigitalCafeBG,
      key: '04',
    },
    {
      title: 'TechBuzz',
      deployed: 'https://techbuzz.herokuapp.com/',
      repo: 'https://github.com/briancampbell003/tech-buzz',
      imgPath: TechBuzzBG,
      key: '05',
    },
    {
      title: 'Note Taker',
      deployed: 'https://protected-mesa-67604.herokuapp.com/notes',
      repo: 'https://github.com/briancampbell003/module-11-note-taker',
      imgPath: NoteTakerBG,
      key: '06',
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
