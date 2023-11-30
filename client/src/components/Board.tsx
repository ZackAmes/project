import {FC} from 'react';
import { useComponentValue } from '@latticexyz/react';
import { getEntityIdFromKeys } from '@dojoengine/utils';
import Square from './Square';


interface BoardProps {
    game_id: string
    components: any
    takeTurn: any
    account: any
}



const Board: FC<BoardProps> = ({game_id, components, account, takeTurn}) => {
  

    const square00 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(0)]));
    const square01 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(1)]));  
    const square02 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(0),BigInt(2)]));  
    const square10 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(0)]));  
    const square11 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(1)]));  
    const square12 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(1),BigInt(2)]));  
    const square20 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(0)]));  
    const square21 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(1)]));  
    const square22 = useComponentValue(components.Square, getEntityIdFromKeys([BigInt(0),BigInt(2),BigInt(2)]));  

    return (
        <>
          <Square x={0} y={0} z={0} 
            state={square11 ? `${square11["state"]}` : " "}
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
        </>
    )
}

export default Board;