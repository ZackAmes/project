import {FC} from 'react';
import Square from './Square';


interface BoardProps {
    game_id: string
    takeTurn: any
    account: any
    coords: number[]
    squareStates: any[]
    squareIds: any[]
}



const Board: FC<BoardProps> = ({game_id, account, takeTurn, coords, squareStates, squareIds}) => {
    
    let squares = squareStates.flat().map( (square) => {
            console.log(square)
            if(square){
                let x = square.x
                let y = square.y
                let drawX = x + coords[0]
                let drawY = y + coords[1]
                let drawZ = coords[2]
                let color = (x%2===0 && y%2===0) || (x%2===1 && y%2===1) ? "blue" : "red"
                return <Square key={squareIds[x][y]} coords={[drawX,drawY,drawZ]} 
                            state={square.value}
                            color={color} click={() => takeTurn(account, game_id, x, y)}
                        />
            }
        }    
    )    


    console.log(squares)
    return (
        
        <>
            {squares}
        </>
    )
}

export default Board;