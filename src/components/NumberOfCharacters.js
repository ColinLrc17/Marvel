export function NumberOfCharacters({ characters = [] }) {
    return (
        <p>
            There is {characters.length === 0 ? 'no' : characters.length} character{characters.length !== 1 ? 's' : ''}
        </p>
    );
}


export default NumberOfCharacters;