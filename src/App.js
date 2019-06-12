import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonListContainer from './PokemonListContainer';
import PokemonDetailContainer from './PokemonDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Route path="/" exact component={PokemonListContainer} />
        <Route path="/pokemon" component={PokemonDetailContainer} />
      </Router>
    </div>
  );
}

export default App;
