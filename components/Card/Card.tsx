import React from 'react';

export interface ICard {
  heading: string;
  labels: string[];
  content: string;
  isExpanded?: boolean;
  onClick?: () => void;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Card: React.FC<ICard> = ({ heading, labels, content, isExpanded, onClick, onClose }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="card" onClick={onClick}>
      <div className="card__head">
        <h3>{heading}</h3>
        <ul>
          {labels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
        <hr />
      </div>
      {isExpanded && (
        <>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <button onClick={onClose}>Sulge kuulutus</button>
          <button>Kandideeri tööle</button>
        </>
      )}
    </div>
  );
};
