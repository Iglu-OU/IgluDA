import React from 'react';

import BackgroundBottom from '../_images/Background-Bottom.svg';
import BackgroundTop from '../_images/Background-Top.svg';
import DietlessSVG from '../_images/Dietless.svg';
import ERES from '../_images/E-Res.svg';
import EPS from '../_images/EPS.svg';
import ERBISVG from '../_images/ERBI.svg';
import ERM from '../_images/erm-logo.svg';
import Separator from '../_images/Separator.svg';
import Taltech from '../_images/Taltech.svg';
import { Stars } from '../stars/Stars';

interface IProject {
  name: string;
  description: string;
  time: string;
  image: React.ReactElement;
  award?: { text: string; link: string };
  project?: string;
  tags: string[];
}

export const ProjectList: IProject[] = [
  {
    name: 'Tallinn University of Technology',
    description:
      "It's all about making the life of students, professors and all other university personnel more convenient and efficient.",
    time: '08.2018 - ...',
    image: <Taltech />,
    //TODO No public page to display, maybe later...?
    // project: 'https://www.taltech.ee/en',
    tags: ['UX research', 'Usability testing', 'Prototype', 'Business analysis', 'Development', 'React'],
  },
  {
    name: 'e-Residency',
    description:
      'e-Residency offers everyone a government-issued digital identity and the opportunity to run a trusted company online, unleashing the world’s entrepreneurial potential.',
    time: '01.2021 - ...',
    image: <ERES />,
    project: 'https://www.e-resident.gov.ee/',
    tags: ['UX analysis', 'Business analysis', 'Prototyping', 'Development', 'React', 'Wordpress'],
  },
  {
    name: 'Estonian National Museum',
    description:
      'Allows you to retrace your steps in the museum, to glean additional info on things you missed the first time and giving you a new perspective on how a digital museum can bring the history closer to you.',
    time: '11.2018 - 12.2021',
    image: <ERM />,
    tags: ['Service design', 'Development', 'React'],
  },
  /*
  {
    name: 'Dietless',
    description: 'A tailor-made meal plan app as a guide towards good health and right fat percentage for Estonians',
    time: '11.2016 - 09.2021',
    image: <DietlessSVG />,
    award: { text: 'Kuldmuna 2018', link: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app' },
    project: 'https://www.erikorgu.ee',
    tags: ['User testing', 'Development', 'Angular', 'Cordova'],
  },
  */
  {
    name: 'Eesti Perearstide Selts',
    description:
      'This project was started with the aim to improve the efficiency and quality of healthcare services. Starting from the ground up - talking with nurses and doctors - has been a learning opportunity for many in a field that has been too static for the longest time.',
    time: '04.2020 - ...',
    image: <EPS />,
    project: 'https://www.perearstiselts.ee/tarkvara',
    tags: ['Prototyping', 'UI analysis', 'Service design', 'User research'],
  },
  {
    name: 'Estonian Responsible Business Index',
    description:
      'Responsible and caring companies creating a wholesome and healthy living environment. Nationally acclaimed assessment platform made with Estonian  enterprises.',
    time: '06.2016 - 12.2018',
    image: <ERBISVG />,
    project: 'https://questionnaire.csr.ee/#/login?afterLoginHash=%23%2FbasicQuestionnaire',
    tags: ['Design', 'Prototype', 'UX research', 'Usability testing', 'Development', 'Aurelia'],
  },
];

export const Portfolio: React.FC = () => (
  <section className="portfolio">
    <BackgroundBottom />
    <BackgroundTop />
    <Stars id="portfolio-stars" maxStars={25} />
    <div className="portfolio-header" data-aos="zoom-in">
      <h1 className="portfolio-header__title">Portfolio</h1>
      <p className="portfolio-header__subtitle">Some of our clients we have worked with along the way</p>
    </div>
    <ul className="portfolio-project-wrapper">
      {ProjectList.map(({ name, description, time, tags, project, award, image }, index) => (
        <li key={`project-${name}-${index}`} className="portfolio-project" data-aos="fade-up">
          <div className="portfolio-project__text">
            <h2 className="portfolio-project__title">{name}</h2>
            <p className="portfolio-project__time">{time}</p>
            <div className="portfolio-project__squiggle">
              <Separator />
            </div>
            <p className="portfolio-project__description">{description}</p>
            <ul className="portfolio-project__tags">
              {tags.map((i, index) => (
                <li key={`index-${i}-${index}`} className="portfolio-project__tags-item">
                  {i}
                </li>
              ))}
            </ul>
            <p className="portfolio-project__external">
              {project ? (
                <a className="portfolio-project__external-project" href={project} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              ) : null}{' '}
              {project && award ? <span aria-hidden={true}>|</span> : null}{' '}
              {award ? (
                <a className="portfolio-project__external-award" href={award.link}>
                  {award.text}{' '}
                </a>
              ) : null}
            </p>
          </div>
          <div
            className={`portfolio-project__logo ${
              index === ProjectList.length - 1 || index === ProjectList.length - 2 ? 'portfolio-project__logo--xs' : ''
            }`}
          >
            {image}
          </div>
        </li>
      ))}
    </ul>
  </section>
);
