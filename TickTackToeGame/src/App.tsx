import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


interface SquareProps {
  value: string | null;  // You can adjust this type based on what `value` should be
  onSquareClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const correct = [


  [0,4,8],
  [0,1,2],
  [0,3,6],
  [2,4,6],
  [2,5,8],
  [1,4,7],
  [3,4,5],
  [6,7,8]
  


];



function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [xarray, newxarray] = useState(Array(3).fill(null));
  const[oarray, newoarray] =  useState(Array(3).fill(null));
  const[countx,newcountx] = useState(0);
  const[counto,newcounto] = useState(0);

  const nextxarray = xarray.slice();
  const nextoarray = oarray.slice();


  function handleClick(i: number) {

    if(squares[i])
    {
      console.log(i)
      return
    }
      
    const nextSquares = squares.slice();
   
   
    if (xIsNext) {
      nextSquares[i] = "X";
      nextxarray[countx] = i;
      console.log(nextxarray)
      newcountx(countx+1);

    } else {
      nextSquares[i] = "O";
      nextoarray[counto] = i;
      console.log(nextoarray)
      newcounto(counto+1);
    }


   
    newxarray(xarray);
    newoarray(oarray);
    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }
  
  return ( <> 
 <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
  
  </>)
}
