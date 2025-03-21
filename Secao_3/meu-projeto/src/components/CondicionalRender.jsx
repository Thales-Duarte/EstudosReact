import React, { useState } from 'react'

const CondicionalRender = () => {
 
        const[x,setX] = useState(true);
        const [name] = useState('Matheus');
 
 
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p> }
        {x ? <p>Se x for true, sim!</p> : <p>Se x for false, não!</p> }
        {name === 'Fulano' ? (
          <div> 
            <p>O nome é Fulano!</p>
            </div>
        ) : (
          <div>
            <p>
              O nome não é Fulano!
            </p>

          </div>
        )}
        <button onClick={() => setX(!x)}>Mudar frase</button>
    </div>
  )
}

export default CondicionalRender