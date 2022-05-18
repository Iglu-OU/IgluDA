import React from 'react';

import Facebook from '../_images/ico-fb.svg';
import Instagram from '../_images/ico-insta.svg';
import Linkedin from '../_images/ico-linkedin.svg';

const footerInternalLinks = [
  { link: 'https://iglu.ee/', name: 'Iglu' },
  { link: 'https://iglu.ee/#how', name: 'Clients' },
  { link: 'https://iglu.ee/#where', name: 'Contact us' },
];
const footerExternalLinks = [
  { link: 'https://www.instagram.com/iglukad/', name: 'Instagram', Icon: <Facebook /> },
  { link: 'https://www.facebook.com/IgluOU/', name: 'Facebook', Icon: <Instagram /> },
  { link: 'https://www.linkedin.com/company/iglu-o%C3%BC/', name: 'LinkedIn', Icon: <Linkedin /> },
];

interface FooterProps {
  showInternalLinks?: boolean;
  showExternalLinksName?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showInternalLinks = true, showExternalLinksName = true }) => (
  <footer className="footer">
    <ul className="footer__links mt-0 list-unstyled">
      {showInternalLinks &&
        footerInternalLinks.map(({ link, name }, index) => (
          <li className="footer__links-item" key={`internal-link-${index}`}>
            <a className="footer__link" href={link} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          </li>
        ))}
      {footerExternalLinks.map(({ link, name, Icon }, index) => (
        <li className="footer__links-item" key={index}>
          <a className="footer__link" aria-label={name} href={link} target="_blank" rel="noreferrer noopener">
            {Icon}
            <span>{showExternalLinksName && name}</span>
          </a>
        </li>
      ))}
    </ul>
    <ul className="footer__links mt-0 list-unstyled">
      <li className="footer__links-item">
        <a href="https://www.iglu.ee/da/gdpr/" className="footer__link footer__link--small">
          Terms and conditions
        </a>
      </li>
    </ul>
  </footer>
);
