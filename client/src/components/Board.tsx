import {FC} from 'react';
import Square from './Square';


interface BoardProps {
    game_id: string
    components: any
    takeTurn: any
    account: any
    coords: number[]
    squareStates: any[]
}



const Board: FC<BoardProps> = ({game_id, components, account, takeTurn, coords, squareStates}) => {
    
    //coords for center of board
    let x = coords[0]
    let y = coords[1]
    let z = coords[2]

    return (
        <>
        <Square x={0} y={0} z={0} 
            state={squareStates[1][1]? squareStates[1][1].state : " "}
            color="red" click={() => takeTurn(account, "0", 1, 1)}
        />
        <Square x={1} y={0} z={0} 
            state={squareStates[2][1]? squareStates[2][1].state : " "}
            color="blue" click={() => takeTurn(account, "0", 2, 1)}
        />
        <Square x={-1} y={0} z={0} 
            state={squareStates[1][1]? squareStates[0][1].state : " "} 
            color="blue" click={() => takeTurn(account, "0", 0, 1)}
        />
        <Square x={0} y={1} z={0} 
            state={squareStates[1][1]? squareStates[1][2].state : " "} 
            color="blue" click={() => takeTurn(account, "0", 1, 2)}
        />
        <Square x={1} y={1} z={0} 
            state={squareStates[1][1]? squareStates[2][2].state : " "} 
            color="red" click={() => takeTurn(account, "0", 2, 2)}
        />
        <Square x={-1} y={1} z={0} 
            state={squareStates[1][1]? squareStates[0][2].state : " "} 
            color="red" click={() => takeTurn(account, "0", 0, 2)}
        />
        <Square x={0} y={-1} z={0} 
            state={squareStates[1][1]? squareStates[1][0].state : " "} 
            color="blue" click={() => takeTurn(account, "0", 1, 0)}
        />
        <Square x={1} y={-1} z={0} 
            state={squareStates[1][1]? squareStates[2][0].state : " "} 
            color="red" click={() => takeTurn(account, "0", 2, 0)}
        />
        <Square x={-1} y={-1} z={0}
            state={squareStates[1][1]? squareStates[0][0].state : " "}
            color="red" click={() => takeTurn(account, "0", 0, 0)}
        />
        </>
    )
}

export default Board;