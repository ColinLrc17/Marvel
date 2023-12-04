import {format} from 'date-fns';
function CharacterDate({ character = {} }) {
    return (

    <small> {format(new Date(character.modified),"MMMM dd , yyyy")}</small>      

    );
}

export default CharacterDate;