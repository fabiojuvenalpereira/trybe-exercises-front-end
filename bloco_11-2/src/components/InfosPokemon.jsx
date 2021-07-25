import React from 'react';
import '../CardPokemon.css'
class InfosPokemon extends React.Component {
  render () { 
    const { pokemon : {name, type, averageWeight, image, moreInfo} } = this.props;
    return (
      <div className='card'>
        <div className='infos'> 
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            { `Peso do Pokemon ${averageWeight.value} ${averageWeight.measurementUnit}` }
          </p>
        </div>
        <img src={ image } alt={ moreInfo } />
      </div>
    )
    
  }
}

export default InfosPokemon;