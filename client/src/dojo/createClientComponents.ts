import { overridableComponent } from "@latticexyz/recs";
import { SetupNetworkResult } from "./setupNetwork";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
  contractComponents,
}: SetupNetworkResult) {
  return {
    ...contractComponents,
    Secret: overridableComponent(contractComponents.Secret),
    TicTacToe: overridableComponent(contractComponents.TicTacToe),
    Square: overridableComponent(contractComponents.Square)
  };
}
