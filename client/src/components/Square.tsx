import {FC} from 'react';
import {Text} from '@react-three/drei';

interface SquareProps {
    x: number,
    y: number,
    z: number,
    xIndex?: number,
    yIndex?:number,
    state: string,
    click?: () => any

}

const Square: FC<SquareProps> = ({x,y,z,xIndex,yIndex,state, click}) => {
    return (
        <>

            <mesh position = {[x,y,z-1]}>
                <boxGeometry/>
                <meshBasicMaterial color="red"/>
            </mesh>
            <mesh position = {[x,y-.1,z]} scale={.75}>
                <Text color="black">
                    O
                </Text>
            </mesh>
        </>
    )
}

export default Square;