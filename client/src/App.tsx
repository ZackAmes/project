import { useDojo } from "./DojoContext";
import { useComponentValue } from "@latticexyz/react";
import { Entity } from "@latticexyz/recs";
import { useEffect } from "react";
import { setComponentsFromGraphQLEntities } from "@dojoengine/utils";
import Secret from "./components/Secret";
import Button from "./components/Button";
import {Canvas} from '@react-three/fiber';

function App() {
  const {
    setup: {
      systemCalls: { spawn, setSecret },
      components,
      network: { graphSdk, contractComponents },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  // extract query
  const { getEntities } = graphSdk();

  // entity id - this example uses the account address as the entity id
  const entityId = account.address.toString();

  // get current component values
  const secret = useComponentValue(components.Secret, entityId as Entity);
  
  // use graphql to current state data
  useEffect(() => {
    if (!entityId) return;

    const fetchData = async () => {
      try {
        const { data } = await getEntities();
        if (data && data.entities) {
          setComponentsFromGraphQLEntities(
            contractComponents,
            data.entities.edges
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityId, contractComponents]);

  return (
    <>
      <div>
        <button onClick={create}>
          {isDeploying ? "deploying burner" : "create burner"}
        </button>
        <button onClick={clear}>clear burners</button>
      </div>

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
      <div className="card">
        <button onClick={() => spawn(account)}>Spawn</button>
        <p> Secret: {secret ? `${secret["value"]}` : "Need to Spawn"} </p>
        <button onClick={() => setSecret(account, 69)}> set secret</button>
      </div>
      <div id="canvas-container">
        <Canvas style={{height: 800, width:800}}>
          <pointLight position={[10, 10, 10]} />
          <Button label={"spawn"} click={() => spawn(account)}/>
          <Secret value={secret ? parseInt(`${secret["value"]}`) : 0} click={() => setSecret(account, 42)}/>
        </Canvas>  
      </div>
    </>
  );
}

export default App;
