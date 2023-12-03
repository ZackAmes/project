import {FC} from 'react';
import Square from './Square';


interface BoardProps {
    game_id: string
    components: any
    takeTurn: any
    account: any
    coords: number[]
    squareStates: any[]
    squareIds: any[]
}



const Board: FC<BoardProps> = ({game_id, components, account, takeTurn, coords, squareStates, squareIds}) => {
    
    //coords for center of board => top left corner
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
                //TODO improve color
                let color = ((x + y % 2) === 0) || (x===2 && y===0) || (x===2 && y===2) || (x===1 && y===1) ? "blue" : "red"
                return <Square key={squareIds[x][y]} x={drawX} y={drawY} z={0} 
                            state={square.value}
                            color={color} click={() => takeTurn(account, "0", x, y)}
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