import {FC} from 'react';
import {Text} from '@react-three/drei';
import Piece from './Piece';

interface SquareProps {
    x: number,
    y: number,
    z: number,
    xIndex?: number,
    yIndex?:number,
    state: number,
    color: string,
    click?: () => any

}


const stateRender = (state: string) => {
    if(state == "0") return " "
    if(state == "1") return "X"
    if(state == "2") return "O"
}

let getPieceType = (type: number) => {
    switch(type){
        case 0: return "none"
        case 1: return "pawn"
        case 2: return "rook"
        case 3: return "knight"
        case 4: return "bishop"
        case 5: return "queen"
        case 6: return "king"
    }
}

const Square: FC<SquareProps> = ({x,y,z,xIndex,yIndex,state,color, click}) => {
    return (
        <>

            <mesh position = {[x,y,z-2]} onClick={click}>
                <boxGeometry/>
                <meshBasicMaterial color={color}/>
            </mesh>
            <Piece x={x} y={y-.1} z={z-1.4} type={state}/>
        </>
    )
}

export default Square;