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
            <mesh position = {[x,y-.1,z-1.4]} scale={.75}>
                <Text color="black">
                    {stateRender(state)}
                </Text>
            </mesh>
        </>
    )
}

export default Square;