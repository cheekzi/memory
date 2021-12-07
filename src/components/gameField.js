import { getQueriesForElement } from '@testing-library/dom';
import React, { useState } from 'react';

const GameField = ({zeichen, func}) => {
   
  const colors = {
    1: "green",
    2: "blue",
    3: "yellow",
    4: "orange",
    5: "red",
    6: "purple",
    7: "darkgreen",
    8: "turquoise",
    9: "white"
  }


  return (
    <button className="card" style={{background: colors[zeichen]}} onClick={(e) => func(zeichen)}>
      <figure>
        <figcaption>{zeichen}</figcaption>
      </figure>
    </button>
  );
}

export default GameField;