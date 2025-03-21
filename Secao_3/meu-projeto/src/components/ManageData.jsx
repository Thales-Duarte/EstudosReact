import React, { useState } from 'react';

const ManageData = () => {
    let someData = 10;
    const changeData = () => {
        // Alterar o valor da variável someData
        someData = 20;
    }
    const[numero, setNumero] = useState(0);

    const changeState = () => {
        // Alterar o valor do state numero
        setNumero(numero + 1);
        
    }

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={changeData}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor do numero: {numero}</p>
                <button onClick={changeState}>Mudar o state</button>
            </div>
        </div>
    );
};

export default ManageData;