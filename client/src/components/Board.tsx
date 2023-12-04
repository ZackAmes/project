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
    
    let x = coords[0]
    let y = coords[1]
    let z = coords[2]


    let squares = squareStates.flat().map( (square) => {
            console.log(square)
            if(square){
                let x = square.x
                let y = square.y
                let drawX = x - 1
                let drawY = y - 1
                let color = (x%2===0 && y%2===0) || (x%2===1 && y%2===1) ? "blue" : "red"
                return <Square key={squareIds[x][y]} coords={[drawX,drawY,0]} 
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