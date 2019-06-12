import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import PokemonDetail from './PokemonDetail';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<PokemonDetail />', function() {
  it('renders a detailed view of a selected pokemon when given stats', function() {
  	const testProps = {
  		height: '10',
  		weight: '10',
  		types: [{type: 'poision'}],
  		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  	}

    const wrapper = shallow(<PokemonDetail selectedPokemon={testProps} bag={[]} />); 
    expect(wrapper.exists('.pokemon-stats')).to.equal(true);
  });
});