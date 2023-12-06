import {FC} from 'react';
import {Text} from '@react-three/drei';


interface ButtonProps {
    label: string
    coords: number[]
    click : () => any
} 

const Button: FC<ButtonProps> = ({coords, label, click}) => {
    return (
    <>
        <mesh rotation={[Math.PI/2,0,0]} position={[coords[0], coords[1], coords[2]]} onClick={click}>
            <Text scale={[.5, .5, .5]}>
                {label}
            </Text>
            <meshBasicMaterial color="black"/>
        </mesh>
    </>)
}

export default Button;