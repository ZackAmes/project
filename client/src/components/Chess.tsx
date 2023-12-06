import {FC} from 'react';
import Square from './Square';
import { getEntityIdFromKeys } from '@dojoengine/utils';

interface ChessProps {
    coords: number[]
}

const Chess: FC<ChessProps> = ({coords}) => {


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
            let drawX = x + coords[0]
            let drawY = y + coords[1]
            let drawZ = coords[2]

            let type = squareStates[x][y];
            let color = (x%2===0 && y%2===0) || (x%2===1 && y%2===1) ? "black" : "grey"
            return <Square key={squareIds[x][y]} coords={[drawX,drawY,drawZ]} 
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