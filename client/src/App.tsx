import { useDojo } from "./DojoContext";
import { useComponentValue, useSync } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import Secret from "./components/Secret";
import Button from "./components/Button";
import Board from "./components/Board";
import Chess from "./components/Chess";
import {Canvas} from '@react-three/fiber';
import { FlyControls } from "@react-three/drei";


function App() {
  const {
    setup: {
      systemCalls: { spawn, setSecret, takeTurn },
      components,
      network: { graphSdk, contractComponents:{
        Secret: SecretContract,
        TicTacToe: TicTacToeContract,
        Square: SquareContract },
      torii_client,
     },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  // extract query
  const { getEntities } = graphSdk();

  // entity id - this example uses the account address as the entity id
  const entityId = account.address.toString() as Entity;

  // get current component values
  const secret = useComponentValue(components.Secret, entityId as Entity);
  
  const squareStates = [];
  const squareIds = [];

  for(let i=0; i<3; i++){
    let tempSquares = []
    let tempIds = []
    for(let j=0; j<3; j++){
      let id = getEntityIdFromKeys([BigInt(0),BigInt(i),BigInt(j)])
      tempIds.push(id)
      tempSquares.push(useComponentValue(components.Square, id))
      //useSync(torii_client, SquareContract, [id])
    }
    squareStates.push(tempSquares)
    squareIds.push(tempIds)
  }

  console.log(squareStates)
  console.log(squareIds)
  // use graphql to current state data
  useSync(torii_client, SecretContract, [entityId])
  //useSync(torii_client, SquareContract, [squareIds[0][0]])
  //useSync(torii_client, TicTacToeContract, ["0" as Entity])

  console.log(useComponentValue(components.TicTacToe, "0" as Entity))
  return (
    <>
      <div className="card">
        select signer:{" "}
        <select onChange={(e) => select(e.target.value)}>
          {list().map((account, index) => {
            return (
              <option value={account.address} key={index}>
                {account.address}
              </option>
            );
          })}
          i
        </select>
      </div>
      <div id="canvas-container">
        <Canvas style={{height: 800, width:800}} 
                camera={{rotation:[Math.PI/3,0,0], position: [0, -7, 3], zoom: 1, up: [0, 0, 1], far: 10000 }}  >
          <axesHelper/>
          <FlyControls dragToLook={true} />
          <pointLight position={[10, 10, 10]} />
          <Button x={2.2} y={0} z={0} label={"spawn"} click={() => spawn(account)}/>
          <Button x={-2.2} y={2} z={0} label={"clear"} click={clear}/>
          <Button x={2.2} y={2} z={0} label={"create"} click={create}/>
          <Board account={account} game_id="0" components={components} 
                 takeTurn={takeTurn} coords={[0,0,0]} squareStates={squareStates} squareIds={squareIds}
          />
          <Chess/>
          <Secret value={secret ? parseInt(`${secret["value"]}`) : 0} click={() => setSecret(account, 155)}/>

        </Canvas>  
      </div>
    </>
  );
}

export default App;
