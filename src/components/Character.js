import React from 'react';

function Character(props) {
    const {character} = props;
    return (
        <div>
            <h3>{character.id} - {character.name}</h3>
            <div>{character.status}</div>
        </div>
    );
}

export default Character;