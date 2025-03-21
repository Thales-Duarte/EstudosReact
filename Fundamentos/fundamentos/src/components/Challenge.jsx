import React, { useState } from "react";
const Challenge = () => { 
   let a = 10;
   let b = 20;
   const [resultado, setResultado] = useState(null); // Estado para armazenar o resultado


   const Somar = () => {
     setResultado(a + b);
     alert(setResultado);
     
   };
   

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <div>
        <br />
        <button onClick={Somar}>Somar</button>
        {resultado !== null && <h1>Resultado: {resultado}</h1>}
      </div>
    </div>
  );
};

export default Challenge;