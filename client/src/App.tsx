import { useDojo } from "./DojoContext";
import { useComponentValue, useSync } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { setComponentsFromGraphQLEntities, getEntityIdFromKeys } from "@dojoengine/utils";
import Secret from "./components/Secret";
import Button from "./components/Button";
import Square from "./components/Square";
import {Canvas} from '@react-three/fiber';

function App() {
  const {
    setup: {
      systemCalls: { spawn, setSecret, takeTurn },
      components,
      network: { graphSdk, contractComponents
        //:{Secret: SecretContract,TicTacToe: TicTacToeContract,Square: SquareContract }
        ,
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
  
  const squares = [];
  const squareIds = [];

  for(let i=0; i<3; i++){
    let tempSquares = []
    let tempIds = []
    for(let j=0; j<3; j++){
      tempIds.push(getEntityIdFromKeys([BigInt(0),BigInt(i),BigInt(j)]))
      tempSquares.push(useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(i),BigInt(j)])))
    }
    squares.push(tempSquares)
    squareIds.push(tempIds)
  }

  console.log(squares)
  console.log(squareIds)
  const square00 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(0)]));
  const square01 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(1)]));  
  const square02 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(2)]));  
  const square10 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(0)]));  
  const square11 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(1)]));  
  const square12 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(2)]));  
  const square20 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(0)]));  
  const square21 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(1)]));  
  const square22 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(2)]));  
 
  // use graphql to current state data
  //useSync(torii_client, SecretContract, [entityId])
  // useSync(torii_client, SquareContract, squareIds.flat())

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
        <Canvas style={{height: 800, width:800}}>
          <pointLight position={[10, 10, 10]} />
          <Button x={2.2} y={0} z={0} label={"spawn"} click={() => spawn(account)}/>
          <Button x={-2.2} y={2} z={0} label={"clear"} click={clear}/>
          <Button x={2.2} y={2} z={0} label={"create"} click={create}/>
          <Square x={0} y={0} z={0} 
            state={squares[1][1] ? squares[1][1].state : " "}
            color="green" click={() => takeTurn(account, "0", 1, 1)}
          />
          <Square x={1} y={0} z={0} 
            state={square21 ? `${square21["state"]}` : " "}
            color="blue" click={() => takeTurn(account, "0", 2, 1)}
          />
          <Square x={-1} y={0} z={0} 
            state={square01 ? `${square01["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 0, 1)}
          />
          <Square x={0} y={1} z={0} 
            state={square12 ? `${square12["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 1, 2)}
          />
          <Square x={1} y={1} z={0} 
            state={square22 ? `${square22["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 2, 2)}
          />
          <Square x={-1} y={1} z={0} 
            state={square02 ? `${square02["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 0, 2)}
          />
          <Square x={0} y={-1} z={0} 
            state={square10 ? `${square10["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 1, 0)}
          />
          <Square x={1} y={-1} z={0} 
            state={square20 ? `${square20["state"]}` : " "} 
            color="black" click={() => takeTurn(account, "0", 2, 0)}
          />
          <Square x={-1} y={-1} z={0}
            state={square00 ? `${square00["state"]}` : " "}
            color="black" click={() => takeTurn(account, "0", 0, 0)}
          />
          <Secret value={secret ? parseInt(`${secret["value"]}`) : 0} click={() => setSecret(account, 42)}/>

          
        </Canvas>  
      </div>
    </>
  );
}

export default App;
