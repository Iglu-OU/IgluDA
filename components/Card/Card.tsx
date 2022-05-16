import React from 'react';

interface ICardMain {
  heading: string;
  labels: string[];
}

interface ICard {
  content: JSX.Element;
  main: ICardMain;
}

export const Card: React.FC<ICard> = ({ content, main }) => {
  return (
    <div className="card">
      <div className="card__head">
        <h3>{main.heading}</h3>
        <ul>
          {main.labels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
        <hr />
      </div>
      {content}
      <button>Sulge kuulutus</button>
      <button>Kandideeri tööle</button>
    </div>
  );
};
