import React, {useState} from 'react';
import Character from "./Character";

function Characters(props) {

    let [characters,setCharacters] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(characters => {
        setCharacters(characters.results.splice(0,6))
    });
    return (
        <div>
            {
                characters.map(character => <Character character={character} key={character.id}/>)
            }
        </div>
    );
}

export default Characters;