import React from 'react'
import '../styles/contador.css'


function Contador({ numClics }) {

    return (
        <div className='counter'>

            {numClics}

        </div>

    );
}

export default Contador;