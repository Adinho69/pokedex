import React from 'react';
import { GlobalStorage } from './customHooks/GlobalContext';
import Pokemon from './Pokemon';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Pokemon />
      </GlobalStorage>
    </div>
  );
}

export default App;
