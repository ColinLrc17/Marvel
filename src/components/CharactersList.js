import { Link } from "react-router-dom";
import CharacterDate from './CharacterDate.js';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong> - 
                        { <CharacterDate character={character} /> }
                    </Link>
                </li>
            ))}
        </ul>
    );
}
