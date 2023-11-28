import {FC} from 'react';
import {Text} from '@react-three/drei';
import { BoxGeometry } from 'three';

interface SquareProps {
    x: number,
    y: number,
    z: number,
    xIndex: number,
    yIndex:number,
    state: string,
    click: () => any

}

const Square: FC<SquareProps> = ({x,y,z,xIndex,yIndex,click}) => {
    return (
        <>
            <mesh position = {[x,y,z]}>
                <boxGeometry/>
            </mesh>
        </>
    )
}

export default Square;