import React from 'react';

export const GlobalContext = React.createContext();

//provider
export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(null);
  const [abilidades, setAbilidades] = React.useState(null);

  const handleChange = React.useCallback((event) => {
    let pesquisa = event.target.value;
    setPokemon(pesquisa.toLowerCase());
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function click() {
    if (pokemon != null) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((response) => response.json())
        .then((json) => setDados(json));

      fetch('https://pokeapi.co/api/v2/ability/' + dados.id)
        .then((response) => response.json())
        .then((json2) => setAbilidades(json2));
    }
  }
  return (
    <GlobalContext.Provider
      value={{ dados, pokemon, handleChange, handleSubmit, click, abilidades }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
