import React, { useState } from 'react'
import { IoIosConstruct } from 'react-icons/io'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [winner, setWinner] = useState(null)
  const renderSqaure = (index) =>{
       return <button key={index} className="border-2 border-black p-4 m-2" onClick={()=>handleClick(index)}>
       { board[index]}
        
         </button>
  }
  const handleClick = (index) =>{
    console.log(index, "click")
    const newBoard = [...board]
    newBoard[index]= isXTurn ? 'X': 'O'
    setBoard(newBoard);
    setIsXTurn(!isXTurn)
    const winnerCombination = checkWinner(newBoard)
    console.log(winnerCombination);
    if(winnerCombination){
      setWinner(newBoard[winnerCombination[0]])
      console.log(winner)
    }

  }

  const checkWinner = (newBoard) =>{
    const combination = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7],
    ]

    for(let i=0;i<combination.length;i++){
      const [a,b,c] = combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combination[i];
      }
    }
    return null;
  }
  return ( 
   <div className="flex flex-col items-center justify-center min-h-screen">
     
      <div className="flex gap-4"> 
        {
          renderSqaure(1)
        
        }
        {
            renderSqaure(2)
        }
        {
          
          renderSqaure(3)
        }
      </div>
      <div className="flex gap-4">
        {
          renderSqaure(4)
          
         
        }
        {
          renderSqaure(5)
        }
        {
           renderSqaure(6)
        }
      </div>
      <div className="flex gap-4"> 
        {
          renderSqaure(7)
        
        
        }
        {
            renderSqaure(8)
        }
        {
            renderSqaure(9)
        }
      </div>
      <div>
       {winner && <h1>{winner} is win the game</h1>}
      </div>
    </div>
  
  )
}

export default TicTacToe
