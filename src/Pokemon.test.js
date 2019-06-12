import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Pokemon from './Pokemon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Pokemon />', function() {
  it('renders a list of pokemon when given at least one pokemon', function() {
    const testProps = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    }
    const wrapper = shallow(<Pokemon pokemonData={testProps} />);
    wrapper.setState({loaded: true, pokemonInfo: {sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}}});
    expect(wrapper.exists('.pokemon-image')).to.equal(true);
  });
});