import React from 'react';
import { GlobalContext } from './customHooks/GlobalContext';

const Pokemon = () => {
  const { dados, pokemon, handleChange, handleSubmit, click, abilidades } =
    React.useContext(GlobalContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon">Pokemon</label>
        <input
          type="text"
          id="pokemon"
          value={pokemon}
          onChange={handleChange}
        />
        <button onClick={click}>search</button>
      </form>
      {dados && (
        <div>
          <p>Pokemon: {dados.name.toUpperCase()}</p>

          <img src={dados.sprites.front_default} alt="" />
          <img src={dados.sprites.front_shiny} alt="" />
          <p>Tipo:</p>
          {dados.types.map((item, index) => (
            <p key={index}>{item.type.name.toUpperCase()}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
