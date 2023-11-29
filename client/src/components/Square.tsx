import {FC} from 'react';
import {Text} from '@react-three/drei';

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

const Square: FC<SquareProps> = ({x,y,z,xIndex,yIndex,state,color, click}) => {
    return (
        <>

            <mesh position = {[x,y,z-1]} onClick={click}>
                <boxGeometry/>
                <meshBasicMaterial color="red"/>
            </mesh>
            <mesh position = {[x,y-.1,z]} scale={.75}>
                <Text color={color}>
                    {state}
                </Text>
            </mesh>
        </>
    )
}

export default Square;