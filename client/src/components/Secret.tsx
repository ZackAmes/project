import React, {FC} from 'react';

interface SecretProps {
    value: number
}

const Secret: FC<SecretProps> = ({value}) => {
    return (
       <div> 
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill={"rgba(" + value + ", 0, 0, .3)"} />
            </ svg>    
        </div>
    )
} 

export default Secret;