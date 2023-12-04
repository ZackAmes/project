import {FC} from 'react';
import Square from './Square';
import { getEntityIdFromKeys } from '@dojoengine/utils';

interface ChessProps {

}

const Chess: FC<ChessProps> = () => {


    let squareStates = [
        [2,3,4,5,6,4,3,2],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [2,3,4,6,5,4,3,2]
    ];


    let squareIds = [];
    for(let i=0; i<8; i++){
        let tempIds = [];
        let tempSquares = [];
        for(let j=0; j<8; j++){
            tempIds.push(getEntityIdFromKeys([BigInt(0), BigInt(i), BigInt(j)]));
        }
        squareIds.push(tempIds);
    }

    


    let squares = squareStates.flat().map( (square, index) => {
        
            let x = index % 8;
            let y = Math.floor(index / 8)
            let drawX = x +3
            let drawY = y +3
            let type = squareStates[x][y];
            //TODO improve color
            let color = (x%2===0 && y%2===0)  ? "black" : "grey"
            return <Square key={squareIds[x][y]} x={drawX} y={drawY} z={0} 
                        state={type}
                        color={color} click={() => console.log("clicked " + type + " at: (" + x + "," + y + ")" )}
                    />
        
    }    
)
    return (
        <>
            {squares}
        </>
    )
}

export default Chess;