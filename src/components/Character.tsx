import React from 'react';
import styled from 'styled-components';

const CharactersStyled = styled.div`
    cursor: pointer;
    text-align: left;
    border-radius: 5px;
    margin: 1em;
    width: auto;
    overflow: hidden;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);

	img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        vertical-align: top;
        border-radius: 5px 5px 0 0;
    }
    .info {
        padding:5em;
        border: 1px solid transparent;
        border-top: none;
        transition : .3s border;
        background: var(--white);
    }

    h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
        font-weight: 700px;
    }
    p {
        font-size: .9em;
        margin-bottom: .5em;
    }
`;

function Character(props: any) {
	const { character} = props;
	const {image} = character;
  return (
    <CharactersStyled >
			<img src={character.image} alt="" width="250" />
			<div className="info">
				<h3 className="name">{character.name}</h3>
				<p className="status">{character.status}</p>
				<p className="species">{character.species}</p>
				<p className="type">{character.type}</p>
				<p className="gender">{character.gender}</p>
				<a href={character.episode} className="episode" >episode</a>
				<div className="location">
						<span>Location:</span>
						<span className="location_name">{character.location.name}</span>
				</div>
			</div>
    </CharactersStyled>
  );
}

export default Character;
