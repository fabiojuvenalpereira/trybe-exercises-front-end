import React from 'react';
import pokemons from '../data';
import InfosPokemon from './InfosPokemon';

class PokemonCard extends React.Component {
  render () {
    return (
       <div>
      {pokemons.map(pokemon => <InfosPokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  } 
  
}

export default PokemonCard;

