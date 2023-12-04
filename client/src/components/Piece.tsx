import {FC} from 'react';


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
        case 3: return "red"
        case 4: return "blue"
        case 5: return "yellow"
        case 6: return "orange"
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