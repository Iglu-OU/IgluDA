import React from 'react';

import Logo from '../_images/logo.svg';

const HeaderLinks = [
  { link: '#process', name: 'Process' },
  { link: '#journey', name: 'Journey' },
  { link: '#team', name: 'Team' },
];

export const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleNav = () => setIsVisible(!isVisible);

  return (
    <nav className="navigation-wrapper">
      <div className={`navigation ${isVisible ? 'navigation--open' : ''}`}>
        <div className="navigation__home">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#">
            <Logo />
            <h1 className="navigation__header">Digital Agency</h1>
          </a>
        </div>
        <ul className="navigation__items">
          {HeaderLinks.map(({ link, name }, index) => (
            <li key={index} className="navigation__item">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href={link} onClick={toggleNav}>
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p className="navigation__burger">
          <button aria-label="Open navigation" onClick={toggleNav}>
            <span>
              <span />
            </span>
          </button>
        </p>
      </div>
    </nav>
  );
};
