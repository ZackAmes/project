import React, {FC} from 'react';

interface SecretProps {
    value: number
    click: () => Promise<void>
}

const getColor = (value: number) => {
    const rValue = value * 69 % 255;
    return rValue
}

const Secret: FC<SecretProps> = ({value, click}) => {
    return (
        <>
            <mesh position={[-2,0,0]} scale={.5} onClick={click}>
                <sphereGeometry />
                <meshBasicMaterial color={"rgb(" + getColor(value) +",0,0)"} />
            </mesh>
        </>  
    )
} 

export default Secret;