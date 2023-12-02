import {FC} from 'react';
import {Text} from '@react-three/drei';


interface ButtonProps {
    label: string
    x:number
    y:number
    z:number
    click : () => any
} 

const Button: FC<ButtonProps> = ({x, y, z, label, click}) => {
    return (
    <>
        <mesh rotation={[Math.PI/2,0,0]} position={[x,y,z]} onClick={click}>
            <Text scale={[.5, .5, .5]}>
                {label}
            </Text>
            <meshBasicMaterial color="black"/>
        </mesh>
    </>)
}

export default Button;