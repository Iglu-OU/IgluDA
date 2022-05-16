import React from 'react';

import styles from './Offers.module.scss';

const offers = [
  {
    title: 'Õppimine ja areng',
    features: [
      'Ühised hackatonid',
      'Mentorid',
      'Iseõppimise päevad',
      'Vertikaaliüritused ja siseseminarid',
      'Iglu raamatukogu',
      'Töö ja kool käsikäes',
    ],
  },
  {
    title: 'Õppimine ja areng',
    features: [
      'Ühised hackatonid',
      'Mentorid',
      'Iseõppimise päevad',
      'Vertikaaliüritused ja siseseminarid',
      'Iglu raamatukogu',
      'Töö ja kool käsikäes',
    ],
  },
  {
    title: 'Õppimine ja areng',
    features: [
      'Ühised hackatonid',
      'Mentorid',
      'Iseõppimise päevad',
      'Vertikaaliüritused ja siseseminarid',
      'Iglu raamatukogu',
      'Töö ja kool käsikäes',
    ],
  },
];

export const Offers: React.FC = () => {
  return (
    <div className={styles.offers}>
      <h2>Me pakume</h2>

      <div className={styles.offers__content}>
        {offers.map((offer, index) => (
          <div key={index}>
            <h3>{offer.title}</h3>
            <ul>
              {offer.features.map((feature, index) => (
                <li key={index}>feature</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
