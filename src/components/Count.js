import React, { useState} from 'react';

export  function Count(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <div className='circle'>
                <p>{count}</p>
            </div>
            <button 
            className='btn' onClick={() => setCount(count + 1)}>
                Clique!
            </button>
        </div>
    )
}