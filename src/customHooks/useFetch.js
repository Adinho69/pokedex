import React from 'react';

//Regras dos Hook's
// 1- Não ultilize os hook's dentro de funções, eles devem estar no top level
// 2- só ultilize os hook's dentro de componente e custom hook's
//



const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  //função assincrona   url
  // usa o Callback par que a função seja criada apenas uma vez

  const request = React.useCallback(async (url, options) => {
    //fetch
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Operação não realizada!');
    } finally {
      //o finally sempre é executado, idependente se é true ou false
      setDados(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  //tu puxa oq tu quer
  return { dados, error, loading, request };
};

export default useFetch;
