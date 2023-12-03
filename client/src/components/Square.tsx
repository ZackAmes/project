import {FC} from 'react';
import {Text} from '@react-three/drei';
import Piece from './Piece';

interface SquareProps {
    x: number,
    y: number,
    z: number,
    xIndex?: number,
    yIndex?:number,
    state: string,
    color: string,
    click?: () => any

}


const stateRender = (state: string) => {
    if(state == "0") return " "
    if(state == "1") return "X"
    if(state == "2") return "O"
}

const Square: FC<SquareProps> = ({x,y,z,xIndex,yIndex,state,color, click}) => {
    return (
        <>

            <mesh position = {[x,y,z-2]} onClick={click}>
                <boxGeometry/>
                <meshBasicMaterial color={color}/>
            </mesh>
            <Piece x={x} y={y-.1} z={z-1.4} type={parseInt(state)}/>
        </>
    )
}

export default Square;