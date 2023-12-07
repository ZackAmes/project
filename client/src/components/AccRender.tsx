import {FC} from 'react';
import { blo } from 'blo';
import {Account} from 'starknet';
import { Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface AccRenderProps {
    account: Account
}

const AccRender: FC<AccRenderProps> = ({account}) => {
    let address = account.address.slice(2);
    let img = blo(`0x${account.address}`);
    let texture = useLoader(TextureLoader, img);

    return (
        <>
            <mesh rotation={[Math.PI/2,0,0]} position={[-5,3,0]} onClick={() => console.log(img)}>
            <planeGeometry args={[1,1]} />
            <meshBasicMaterial map={texture}/>
        </mesh>
        </>
    )
} 

export default AccRender