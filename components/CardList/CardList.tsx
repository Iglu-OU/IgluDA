import React from 'react';

import { Card, ICard } from '../Card/Card';

const offers: ICard[] = [
  {
    heading: 'Junior Front-end developer',
    labels: ['Tallinn', 'Tartu'],
    content: `
      <div>
    <h4>Näeme front-end arendajana inimest, kellel on.</h4>
    <ul>
      <li>vähemalt 2a kogemust front-end arendajana</li>
    </ul>
  </div>
    `,
  },
  {
    heading: 'Senior Front-end developer',
    labels: ['Tallinn', 'Tartu'],
    content: `
      <div>
    <h4>Näeme front-end arendajana inimest, kellel on.</h4>
    <ul>
      <li>vähemalt 2a kogemust front-end arendajana</li>
    </ul>
  </div>
    `,
  },
  {
    heading: 'Junior Front-end developer',
    labels: ['Tallinn', 'Tartu'],
    content: `
      <div>
    <h4>Näeme front-end arendajana inimest, kellel on.</h4>
    <ul>
      <li>vähemalt 2a kogemust front-end arendajana</li>
    </ul>
  </div>
    `,
  },
];

export const CardList: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = React.useState<number>();

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleCardClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setExpandedIndex(99);
  };

  console.log('expandedIndex', expandedIndex);

  return (
    <div>
      <h2>Aktiivsed tööpakkumised</h2>

      {offers.map(({ heading, labels, content }, index) => (
        <Card
          key={index}
          heading={heading}
          labels={labels}
          content={content}
          isExpanded={index === expandedIndex}
          onClick={() => handleCardClick(index)}
          onClose={handleCardClose}
        />
      ))}
    </div>
  );
};
