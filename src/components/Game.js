import React, { useState } from 'react';
import Header from './Header';
import GameFields from './GameFields';

const Game = () => {
    const [score, setScore] = useState(0);
    console.log(score);
    const [hscore, setHScore] = useState(0);

    const setS = (s) => {
        setScore(s);
    };

    console.log(score);

    const setHS = (val) => {
        setHScore(val);
    };

  return (
    <div>
        <Header score={score} hscore={hscore} />
        <div>
          <GameFields setS={setS} HS={hscore} setHS={setHS} />
        </div>
    </div>
  );
}

export default Game;