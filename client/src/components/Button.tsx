import {FC} from 'react';
import { extend, Object3DNode } from '@react-three/fiber';
import {Text} from '@react-three/drei';

interface ButtonProps {
    label: string
    click : () => Promise<void>
} 

const Button: FC<ButtonProps> = ({label, click}) => {
    return (
    <>
        <mesh position={[2.2,0,0]} onClick={click}>
            <Text scale={[.5, .5, .5]}>
                Hello world
            </Text>
            <meshBasicMaterial color="black"/>
        </mesh>
    </>)
}

export default Button;