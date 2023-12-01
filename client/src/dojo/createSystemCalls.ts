import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { execute, contractComponents }: SetupNetworkResult,
  { Secret, TicTacToe, Square }: ClientComponents
) {
  const spawn = async (signer: Account) => {
    const entityId = signer.address.toString() as Entity;

    const secretId = uuid();
    Secret.addOverride(secretId, {
      entity: entityId,
      value: { value: 0 },
    });

    try {
      const tx = await execute(signer, "actions", "spawn", []);
      setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
    } catch (e) {
      console.log(e);
      Secret.removeOverride(secretId);
    } finally {
      Secret.removeOverride(secretId);
    }
  };
  
  const takeTurn = async (signer: Account, game_id: string, x: number, y:number) => {
    const entityId = game_id as Entity;

    try {
      const tx = await execute(signer, "actions", "takeTurn", [game_id, x, y]);
      setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
    } catch (e) {
      console.log(e);
    } 
  }

  const setSecret = async (signer: Account, value: number) => {
    const entityId = signer.address.toString() as Entity;

    const secretId = uuid();
    Secret.addOverride(secretId, {
      entity: entityId,
      value: {value: value},
    });

    try {
      const tx = await execute(signer, "actions", "setSecret", [value]);
      setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
    } catch (e) {
      console.log(e);
      Secret.removeOverride(secretId);
    } finally {
      Secret.removeOverride(secretId);
    }
  }

  return {
    spawn,
    setSecret,
    takeTurn,
  };
}
