import React, { useState } from 'react';
import GameField from './gameField';

function arrayShuffle(){
    var tmp, rand;
    for(var i =0; i < this.length; i++){
      rand = Math.floor(Math.random() * this.length);
      tmp = this[i]; 
      this[i] = this[rand]; 
      this[rand] =tmp;
    }
  }
  
  Array.prototype.shuffle = arrayShuffle;

const GameFields = (props) => {
    const [clickedArray, setClickedArray] = useState([]);

    const clickField = (field) => {
        const len = clickedArray.length
        if(Object.values(clickedArray).includes(field)) {
            if(props.HS < len) props.setHS(len);
            props.setS(0);
            setClickedArray([]);    
        } else {
            setClickedArray([...clickedArray, field]);
            props.setS(len+1);
        }
    }

    const fieldsArray = () => {
        let numberArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
        numberArray.shuffle();
        console.log(numberArray)
        return numberArray
    }

  return (
    <div className="cardContainer">
        {fieldsArray().map((number) => {
            return <GameField zeichen={number} func={clickField} />;
        })}
    </div>
  );
}

export default GameFields;