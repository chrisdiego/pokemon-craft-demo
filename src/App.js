import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonListContainer from './PokemonListContainer';
import PokemonDetailContainer from './PokemonDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        	<div className="row my-5 my-5">
        		<Link className="button button-primary button-large" to="/">Home</Link>
        	</div>
        </div>
        <Route path="/" exact component={PokemonListContainer} />
        <Route path="/pokemon" component={PokemonDetailContainer} />
      </Router>
    </div>
  );
}

export default App;
