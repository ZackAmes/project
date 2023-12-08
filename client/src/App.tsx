import { useDojo } from "./DojoContext";
import { useComponentValue, useSync } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";

import Secret from "./components/Secret";
import Button from "./components/Button";
import Board from "./components/Board";
import Chess from "./components/Chess";
import Burners from "./components/Burners";
import AccRender from "./components/AccRender";

import {Canvas} from '@react-three/fiber';
import { FlyControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import TestPhysics from "./components/TestPhysics";



function App() {
  const {
    setup: {
      systemCalls: { spawn, setSecret, takeTurn },
      components: {Secret, Square, TicTacToe},
      network: { graphSdk, contractComponents:{
        Secret: SecretContract,
        TicTacToe: TicTacToeContract,
        Square: SquareContract },
      torii_client,
     },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  const addressId = account.address.toString() as Entity;

  const secret = useComponentValue(Secret, addressId as Entity);
  
  const squareStates = [];
  const squareIds = [];

  for(let i=0; i<3; i++){
    let tempSquares = []
    let tempIds = []
    for(let j=0; j<3; j++){
      let id = getEntityIdFromKeys([BigInt(0),BigInt(i),BigInt(j)])
      tempIds.push(id)
      tempSquares.push(useComponentValue(Square, id))
    }
    squareStates.push(tempSquares)
    squareIds.push(tempIds)
  }

  console.log(squareStates)
  console.log(squareIds)

  console.log(useComponentValue(TicTacToe, getEntityIdFromKeys([BigInt(0)])))
  return (
    <>
      <div id="canvas-container">
        <Canvas style={{height: 800, width:800}} 
                camera={{rotation:[Math.PI/3,0,0], position: [0, -7, 3], zoom: 1, up: [0, 0, 1], far: 10000 }}  >
            <axesHelper/>
            <FlyControls dragToLook={true} />
            <pointLight position={[10, 10, 10]} />
            <Button scale = {3} coords={[0,2.5,3]} label={"spawn"} click={() => spawn(account)}/>
            <Board account={account} game_id="0"
                  takeTurn={takeTurn} coords={[0,-2,-2]} squareStates={squareStates} squareIds={squareIds}
            />
            <Chess coords={[0,3,-3]}/>
            <Burners coords={[-2,0,0]} select={select} list={list} clear={clear} create={create} isDeploying={isDeploying}/>
            <Button color = "black" scale= {.3} coords = {[0,-1,2.3]} label="signer" click={() => console.log(account.address)}/>
            <AccRender coords={[0,-1,2]} account={account} click={() => console.log(account.address)}/>
        </Canvas>  
      </div>
    </>
  );
}

export default App;
