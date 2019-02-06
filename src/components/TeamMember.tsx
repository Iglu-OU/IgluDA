import * as React from 'react';

export const TeamMember = ({
    data: { name, title, description, descriptionExtended, imageUrl, imageSrc, imageSecSrc, imageAlt, skillSet },
}) => {
    return (
        <li className="team-member">
            <p className="team-member__portrait mt-0">
                <img className="team-member__portrait-primary" src={imageSrc} alt={imageAlt} />
                <img className="team-member__portrait-secondary" src={imageSecSrc} alt={imageAlt} />
            </p>
            <div className="team-member__description">
                <a className="team-member__name mt-0 h1" href={imageUrl} title={`LinkedIn - ${name}`} target="_blank">
                    <h2>{name}</h2>
                </a>
                <p className="team-member__title mt-0">
                    <span>{title}</span>
                </p>
                <p>{description}</p>
                <p>{descriptionExtended}</p>
                <ul className="team-member__skills">
                    {skillSet.map((skill: string, skillSetKey: number) => {
                        return <li key={`skillset-${skillSetKey}`}>{skill}</li>;
                    })}
                </ul>
            </div>
        </li>
    );
};
