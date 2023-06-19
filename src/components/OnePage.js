import React, { useState } from 'react';
import ProjectCard from './pages/Projects/ProjectCard';
import DreamJotBG from './pages/Projects/assets/dreamJot.png';
import TeamGenBG from './pages/Projects/assets/teamGen.png';
import TechBuzzBG from './pages/Projects/assets/techBuzz.png';
// import WeatherDashBG from './pages/Projects/assets/weatherDash.png';
import MhlReloBG from './pages/Projects/assets/mhlRelo.png';
import VaristasDigitalCafeBG from './pages/Projects/assets/varistasDigitalCafe.png';
// import NoteTakerBG from './pages/Projects/assets/noteTaker.png';
import ehpBG from './pages/Projects/assets/ehp.png';
import ResumePDF from '../assets/Campbell_Resume2022_WebDev.pdf';
import downloadLogo from '../assets/download-logo.png';



export default function OnePage(props) {

    const styles = {
        contactSubmitBtn: {
        backgroundColor: "var(--primary)",
        color: "var(--secondary)",
        border: "black 1px solid",
        },
    };

    const projData = [
        {
          title: 'East Humboldt Pies',
          deployed: 'https://briancampbell003.github.io/east-humboldt-pies/',
          repo: 'https://github.com/briancampbell003/east-humboldt-pies',
          imgPath: ehpBG,
          key: '01',
          description: 'Promotional webpage for home-baked goods business',
          tech: 'JavaScript, ReactJS'
        },
        {
          title: 'MHL Relocation Guide',
          deployed: 'https://briancampbell003.github.io/mhl-rs-relocation/',
          repo: 'https://github.com/briancampbell003/mhl-rs-relocation',
          imgPath: MhlReloBG,
          key: '02',
          description: 'Informative React app built for Resident Services Staff at Mercy Housing Lakefront',
          tech: 'JavaScript, ReactJS, HMTL, CSS'
        },
        {
          title: 'Dream Jot',
          deployed: 'https://dream-jot.herokuapp.com/',
          repo: 'https://github.com/briancampbell003/dream-jot',
          imgPath: DreamJotBG,
          key: '03',
          description: 'Digital dream journal with community features',
          tech: 'Sequelize, ExpressJS, Handlebars'
        },
        {
          title: 'Team Profile Generator',
          deployed: 'https://briancampbell003.github.io/module-10-team-profile-demo/',
          repo: 'https://github.com/briancampbell003/module-10-team-profile-generator',
          imgPath: TeamGenBG,
          key: '04',
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
          key: '05',
          description: '',
          tech: ''
        },
        {
          title: 'TechBuzz',
          deployed: 'https://techbuzz.herokuapp.com/',
          repo: 'https://github.com/briancampbell003/tech-buzz',
          imgPath: TechBuzzBG,
          key: '06',
          description: '',
          tech: ''
        },
        // {
        //   title: 'Note Taker',
        //   deployed: 'https://protected-mesa-67604.herokuapp.com/notes',
        //   repo: 'https://github.com/briancampbell003/module-11-note-taker',
        //   imgPath: NoteTakerBG,
        //   key: '06',
        //   description: '',
        //   tech: ''
        // },
      ]
    const [input, setInput] = useState({
    id: '',
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: input.name,
      email: input.email,
      message: input.message,
    });
    
    setInput({
      id: '',
      name: '',
      email: '',
      message: '',
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
        {/* FROM ABOUT PAGE */}
        <div className="page-content">
      <h1>→ About</h1>
      <p>
        Brian Campbell is a web developer, social worker, DJ and writer working out of Chicago.

        <br></br>
        <br></br>

        Specifically: Full-stack web developer leveraging background in philosophy and in social work to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from Northwestern University Coding Boot Camp while working with formerly homeless adults in full-time social services position. Hobbyist fiction writer and DJ with an eye and an ear for design; former math instructor adept at analytic problem-solving.
        <br></br>
        <br></br>

        Reach out using contact information below, or from the Contact tab above. ✌️ 
      </p>
      </div>
        {/* FROM PROJECTS PAGE */}
        <div className="page-content">
      <h1>→ Projects</h1>
      <div>
        <ProjectCard projData={projData} />
      </div>
        </div>
      {/* FROM CONTACT */}
      <div className="page-content">
      <h1>→ Contact Me</h1>
      <p class="my-email">brian.campbell003@gmail.com</p>
      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="name"
            value={input.name}
            placeholder="Your Name"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            value={input.email}
            placeholder="name@example.com"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message-input" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message-input"
            name="message"
            value={input.message}
            rows="5"
            placeholder="Lorem ipsum"
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn mb-3" style={styles.contactSubmitBtn}>Submit</button>
        </div>
      </form>
      </div>

      {/* FROM RESUME PAGE */}
      <div className="page-content">
      <h1>→ Resume</h1>
      <p>
        <a className='download-link' href={ResumePDF} download>
          Download resume as PDF file
            <img
                src={downloadLogo}
                alt="download logo"
                width="40"
                heigth="40">
            </img>
        </a> 
      </p>
      <p>Education</p>
      <ul>
        <li>2U/BootCamp Spot Northwestern Coding Boot Camp; January 2023</li>
        <li>Northwestern University, Evanston, Illinois: Bachelor of Arts; major: Philosophy, June 2016</li>
        <li>GPA: 3.53 / 4.00</li>
      </ul>
      <p>Skills</p>
      <ul>  
        <li>JavaScript ES6+</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>SQL</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>Bootstrap</li>
      </ul>
    </div>
    </div>

    
  );
}