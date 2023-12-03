import {FC} from 'react';
import { CylinderGeometry } from 'three';


interface PieceProps {
    x: number,
    y: number,
    z: number,
    type: number
    player?: number
}

const getColor = (type: number) => {
    switch(type){
        case 1: return "green"
        case 2: return "purple"
    }
}

const Piece: FC<PieceProps> = ({x,y,z,type, player}) => {
    if(type > 0){
        return (
            <mesh rotation={[Math.PI/2, 0, 0]} position={[x,y,z]} scale={.25}>
                <cylinderGeometry />
                <meshBasicMaterial color={getColor(type)}/>
            </mesh>
        )
    }
    
}

export default Piece;