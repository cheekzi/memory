import './App.css';
import Game from './components/Game';

import React from 'react';

function App() {
  return (
    <div className="App">
      <button className="testB">
        <figure className="figureB">
          <img className="imageB" src="https://raw.githubusercontent.com/ding-09/memory-game/5458492d491fb84d2cd0f75c6c8ef88070238b32/src/images/curry.jpg" alt="lost"/>
          <figcaption className="captionB">Lol</figcaption>
        </figure>

      </button>
      
      <Game />
    </div>
  );
}

export default App;
