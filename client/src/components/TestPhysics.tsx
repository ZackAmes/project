import { RigidBody, Physics } from "@react-three/rapier";
import { Box, Sphere } from "@react-three/drei";

const TestPhysics = () => {

    return (
        <Physics colliders="hull">
            <RigidBody>
                <Box />
            </RigidBody>
            <RigidBody position={[0, 10, 0]}>
                <Sphere />
            </RigidBody>
        </Physics>
    )
}

export default TestPhysics;