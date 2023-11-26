import React, {FC} from 'react';

interface SecreterProps {
    value: number
}

const getColor = (value: number) => {
    const rValue = value * 69 % 255;
    return rValue
}

const Secreter: FC<SecreterProps> = ({value}) => {
    return (
        <>
            <mesh>
                <sphereGeometry />
                <meshBasicMaterial color={"rgb(" + getColor(value) +",0,0)"} />
            </mesh>
        </>  
    )
} 

export default Secreter;