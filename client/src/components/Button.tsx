import {FC} from 'react';
import {Text} from '@react-three/drei';


interface ButtonProps {
    label: string
    coords: number[]
    scale?: number
    click : () => any
} 

const Button: FC<ButtonProps> = ({scale=1, coords, label, click}) => {
    return (
    <>
        <mesh scale={scale} rotation={[Math.PI/2,0,0]} position={[coords[0], coords[1], coords[2]]} onClick={click}>
            <Text color="red">
                {label}
            </Text>
            <meshBasicMaterial color="black"/>
        </mesh>
    </>)
}

export default Button;