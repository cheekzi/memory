import React, { useState } from 'react';


const Header = (props) => {

  return (
    <div className="header">
        <h1 className="main-title">Memory Game</h1>
        <div className="score-board">
          <p className="current-score">Score: {props.score}</p>
          <p className="best-score">High Score: {props.hscore}</p>
      </div>
    </div>
  );
}

export default Header;