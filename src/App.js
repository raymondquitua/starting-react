
import './App.css';
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
import React from 'react';

// Creating a PokemonRow component
const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
  </tr>
)
//prop-types can be use to specify a component and then to 
//identify each property of the component
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {

  const [filter, filterSet] = React.useState("");

  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem",
    }}>
      <h1 className='title '>Pokemon Search</h1>
      <input 
        value={filter}
        
      />

      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0,20).map(pokemon => (
            <PokemonRow
              pokemon={pokemon} 
              key={pokemon.id} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
