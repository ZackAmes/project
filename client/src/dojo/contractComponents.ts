/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
	  Secret: (() => {
	    return defineComponent(
	      world,
	      { player: RecsType.String, value: RecsType.Number },
	      {
	        metadata: {
	          name: "Secret",
	          types: [],
	        },
	      }
	    );
	  })(),
  };
}
