import React, {useEffect} from 'react';
import Character from './Character';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

export type CharacterTYpe = {
		name: string
		image: string
}

export interface IListOfCharactersProps {
    characters: CharacterTYpe[];
}

const ListOfCharactersStyled = styled.div`
	display: grid;;
	grid-row-gap: 2.3em;
	grid-auto-flow: columns;
	grid-column-gap: 66px;
	grid-template-columns: repeat(auto-fill, 270px);
	background: var(--background);
	justify-content: center;
	padding: 3em 0;
`;

function ListOfCharacters(props:IListOfCharactersProps) {
  console.log(props)
  return (
		<Wrapper>
			<ListOfCharactersStyled>
					{props.characters.map(character => {
						return <Character character={character}/>
					})}
			</ListOfCharactersStyled>
		</Wrapper>
  );
}

export default ListOfCharacters;
