import {FC} from 'react';
import {Text} from '@react-three/drei';
import Piece from './Piece';

interface SquareProps {
    coords: number[],
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

const Square: FC<SquareProps> = ({coords, state,color, click}) => {
    let x = coords[0]
    let y = coords[1]
    let z = coords[2]


    return (
        <>

            <mesh position = {[x,y,z-2]} onClick={click}>
                <boxGeometry args={[1,1,.01]}/>
                <meshBasicMaterial color={color}/>
            </mesh>
            <Piece x={x} y={y-.1} z={z-1.9} type={state}/>
        </>
    )
}

export default Square;