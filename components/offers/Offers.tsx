import React from 'react';

import styles from './Offers.module.scss';

const offers = [
  {
    title: 'Õppimine ja areng',
    features: [
      'Mentorid',
      'Iseõppimise päevad',
      'Ühised häckatonid',
      'Konverentsid ja siseseminarid',
      'Iglu raamatukogu',
      'Töö ja kool käsikäes',
    ],
  },
  {
    title: 'Puhkus ja vabadus',
    features: [
      'Paindlik tööaeg',
      'Jõuluvaheaeg ehk lisapuhkepäevad',
      'Haiguspäevade kompoensatsioon',
      'Puhkepäevad tähtpäevade puhul',
    ],
  },
  {
    title: 'Tervis ja heaolu',
    features: ['Massaaž kontorites', 'Spordikompoenstatsioon', 'Iglu tervisekuu'],
  },
  {
    title: 'Üritused ja ühine aeg',
    features: ['Suve- ja talvepäevad', '"Tunne Eskimot" üritused', 'Pannkoogid ja smuutihommikud'],
  },
];

export const Offers: React.FC = () => {
  return (
    <div className={styles.offers}>
      <h2>Miks meiega on hea koos ehitada?</h2>
      <div className={styles.offers__content}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offers__item}>
            <h3 className={styles.offers__title}>{offer.title}</h3>
            <span className={styles.offers__separator} />
            <ul className="list-unstyled">
              {offer.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
