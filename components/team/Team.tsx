import React from 'react';

import { CloudsSVG } from '../_images/Clouds';
import Separator from '../_images/Separator.svg';
import AgePrimary from '../_images/team/primary/age.svg';
import EglePrimary from '../_images/team/primary/egle.svg';
import HarlesPrimary from '../_images/team/primary/harles.svg';
import IvarPrimary from '../_images/team/primary/ivar.svg';
import JoonasPrimary from '../_images/team/primary/joonas.svg';
import NaaberPrimary from '../_images/team/primary/kasparn.svg';
import SuviPrimary from '../_images/team/primary/kaspars.svg';
import KristoPrimary from '../_images/team/primary/kristo.svg';
import LauraPrimary from '../_images/team/primary/laura.svg';
import LaurasPrimary from '../_images/team/primary/lauras.svg';
import AgeSecondary from '../_images/team/secondary/age.svg';
import EgleSecondary from '../_images/team/secondary/egle.svg';
import HarlesSecondary from '../_images/team/secondary/harles.svg';
import IvarSecondary from '../_images/team/secondary/ivar.svg';
import JoonasSecondary from '../_images/team/secondary/joonas.svg';
import NaaberSecondary from '../_images/team/secondary/kasparn.svg';
import SuviSecondary from '../_images/team/secondary/kaspars.svg';
import KristoSecondary from '../_images/team/secondary/kristo.svg';
import LauraSecondary from '../_images/team/secondary/laura.svg';
import LaurasSecondary from '../_images/team/secondary/lauras.svg';
import { Stars } from '../stars/Stars';

export interface ITeamMember {
  name: string;
  title: string;
  description: string;
  descriptionExtended: string;
  imageUrl: string;
  PrimaryImage: JSX.Element;
  SecondaryImage?: JSX.Element;
  skillSet: string[];
  noHover?: boolean;
}

const Analysts: ITeamMember[] = [
  {
    name: 'Laura Asu',
    title: 'Team lead, UX & UI analyst',
    description: 'Keeps the team inspired and things running, smoothly.',
    descriptionExtended: 'She is one of the few who can perform open-heart surgery on a live system.',
    imageUrl: 'https://www.linkedin.com/in/laura-asu-40460663/',
    PrimaryImage: <LauraPrimary />,
    SecondaryImage: <LauraSecondary />,
    skillSet: ['UI analysis', 'Business analysis', 'User research', 'Usability testing'],
  },
  {
    name: 'Kristo Danilson',
    title: 'UX & UI analyst',
    description: 'Passionate about users and the business side of IT.',
    descriptionExtended: 'There is a rumour that he discovered the true meaning of disco. But then they changed it.',
    imageUrl: 'https://www.linkedin.com/in/kristo-danilson-a9a08b159/',
    PrimaryImage: <KristoPrimary />,
    SecondaryImage: <KristoSecondary />,
    skillSet: ['Business analysis', 'User research', 'Usability testing'],
  },
  {
    name: 'Joonas Kessel',
    title: 'UX & UI analyst',
    description: `Ensures the projects are on track and the users' needs are met.`,
    descriptionExtended: 'Watch out, you will most likely be hit by several witty remarks within a minute. We like.',
    imageUrl: 'https://www.linkedin.com/in/joonaskessel/',
    PrimaryImage: <JoonasPrimary />,
    SecondaryImage: <JoonasSecondary />,
    skillSet: ['Prototyping', 'User research', 'Usability testing'],
  },
  {
    name: 'Age Arus',
    title: 'UX analyst',
    description: `Focused on bringing only the best solutions to end-users.`,
    descriptionExtended: 'Elevates the whole team with her enthusiastic and radiant personality.',
    imageUrl: 'https://www.linkedin.com/in/agearus/',
    PrimaryImage: <AgePrimary />,
    SecondaryImage: <AgeSecondary />,
    skillSet: ['Business analysis', 'Prototyping', 'User research'],
  },
];

const Designers: ITeamMember[] = [
  {
    name: 'Egle Kiik',
    title: 'UX & UI designer',
    description: 'Bridges the gap between business and end user.',
    descriptionExtended: "Making digital rainbows with her unicorn skill set to make you feel like you're flying.",
    imageUrl: 'https://www.linkedin.com/in/egle-kiik-a3341451/',
    PrimaryImage: <EglePrimary />,
    SecondaryImage: <EgleSecondary />,
    skillSet: ['Printed media', 'Microcopy', 'UX analysis', 'UX/UI design', 'UX research', 'Usability testing'],
  },
  {
    name: 'Laura Streimann',
    title: 'UI & UX designer',
    description: 'A citizen of the world who has sojourned in many places in search of good design and new knowledge.',
    descriptionExtended: " She's met many opponents, but none can match her excellent sense of humour.",
    imageUrl: 'https://www.linkedin.com/in/laura-streimann-405414b1',
    PrimaryImage: <LaurasPrimary />,
    SecondaryImage: <LaurasSecondary />,
    skillSet: ['Prototyping', 'UI design', 'UI analysis', 'UX analysis', 'User research', 'Usability testing'],
  },
];

const Developers: ITeamMember[] = [
  {
    name: 'Harles-Herman Pilter',
    title: 'Front-end lead & developer',
    description: 'Skilled in creating micro-interactions, also, has a strong sense for business.',
    descriptionExtended: 'He built a code delivery system that consists entirely of drones. Mr. Bezos is so jealous.',
    imageUrl: 'https://www.linkedin.com/in/harles-herman-pilter-6a3636114/',
    PrimaryImage: <HarlesPrimary />,
    SecondaryImage: <HarlesSecondary />,
    skillSet: ['Vue', 'Aurelia', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Ivar Kallejärv',
    title: 'Front-end developer',
    description: 'Adept at data visualization complemented by knowledge of system analysis.',
    descriptionExtended: "He could love books even more but they don't have landscape mode.",
    imageUrl: 'https://www.linkedin.com/in/ivar-kallej%C3%A4rv-21986611a/',
    PrimaryImage: <IvarPrimary />,
    SecondaryImage: <IvarSecondary />,
    skillSet: ['Aurelia', 'Ionic', 'C3', 'D3', 'Chart.js', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Kaspar Suvi',
    title: 'Front-end developer',
    description: 'Wants to provide only reasonable and valuable code.',
    descriptionExtended: 'His daily routine consists of sports activities like badminton and git push-ups.',
    imageUrl: 'https://www.linkedin.com/in/kaspar-suvi-141080120/',
    PrimaryImage: <SuviPrimary />,
    SecondaryImage: <SuviSecondary />,
    skillSet: ['React', 'Angular', 'TypeScript', 'BEM'],
  },
  {
    name: 'Kaspar Naaber',
    title: 'Front-end developer',
    description: "A gentleman and a scholar who likes to keep pace in today's hectic world.",
    descriptionExtended: 'Balances an active lifestyle with active client communication.',
    imageUrl: 'https://www.linkedin.com/in/kaspar-naaber-6a240264/',
    PrimaryImage: <NaaberPrimary />,
    SecondaryImage: <NaaberSecondary />,
    skillSet: ['React', 'TypeScript', 'Flow', 'GraphQL', 'BEM'],
  },
];

export const Team: React.FC = () => (
  <section id="team">
    <Stars />
    <CloudsSVG />
    <div className="team__top-fold" />
    <div className="team-wrapper">
      <TeamSection
        title="UX & UI Analysts"
        desc="The invisible force behind a system, helping users reach point C without realizing they've already passed point B."
        members={Analysts}
      />
      <TeamSection
        title="UX & UI Designers"
        desc="Graceful and stylish, designing elegant solutions that feel easy and effortless."
        members={Designers}
      />
      <TeamSection
        title="Front-End Developers"
        desc="The reasoning engine behind the team, that simplifies complexity and solves problems."
        members={Developers}
      />
    </div>
  </section>
);

interface TeamSectionProps {
  title: string;
  desc: string;
  members: ITeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, desc, members }) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    setWindowWidth(isNaN(window?.innerWidth) ? window?.outerWidth : window?.innerWidth);
  });

  return (
    <>
      <div className="team__section" data-aos="zoom-in">
        <h2 className="team__heading">{title}</h2>
        <p className="team__heading-separator" aria-hidden="true">
          <Separator />
        </p>
        <p className="team__description">{desc}</p>
      </div>
      <ul className="mt-0 list-unstyled team">
        {members.map((i, index) => (
          <li
            key={index}
            className="team-member"
            data-aos="fade-up"
            data-aos-offset={windowWidth > 600 ? '150' : '350'}
          >
            <div className="team-member__portrait mt-0">
              <div className="team-member__portrait-primary">{i.PrimaryImage}</div>
              {i.SecondaryImage && (
                <div className={`team-member__portrait-secondary ${i.noHover ? 'no-hover' : ''}`}>
                  {i.SecondaryImage}
                </div>
              )}
            </div>
            <div className="team-member__description">
              <a
                className="team-member__name mt-0 h1"
                href={i.imageUrl}
                title={`LinkedIn - ${i.name}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <h2>{i.name}</h2>
              </a>
              <p className="team-member__title mt-0">
                <span>{i.title}</span>
              </p>
              <p>
                {i.description} {i.descriptionExtended}
              </p>
              <ul className="team-member__skills">
                {i.skillSet.map((skill, skillIndex) => (
                  <li key={`skillet-${skillIndex}`}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
