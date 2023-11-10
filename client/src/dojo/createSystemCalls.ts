import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@latticexyz/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { Direction, updatePositionWithDirection } from "../utils";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { execute, contractComponents }: SetupNetworkResult,
  { Secret }: ClientComponents
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
  };
}
