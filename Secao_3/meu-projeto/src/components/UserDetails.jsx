import React, { useState } from 'react';

const UserDetails = ({ pessoas }) => {
  const [index, setIndex] = useState(0); // Armazena o índice da pessoa a ser renderizada

  const newPessoa = () => {
    // Incrementa o índice para exibir a próxima pessoa
    if (index < pessoas.length - 1) {
      setIndex(index + 1);
    } else {
        setIndex(0);
    }
  };

  return (
    <div>
      <h2>Detalhes dos usuários</h2>
      <br /><br />
      
      {/* Botão para renderizar a próxima pessoa */}
      <button onClick={newPessoa}>
        Mostrar próxima pessoa
      </button>

      {/* Renderiza a pessoa atual */}
      {index < pessoas.length - 1 ? (
        <ul>
          <li key={pessoas[index].id}>
            <p>Nome: {pessoas[index].nome}</p>
            <p>Idade: {pessoas[index].idade}</p>
            {pessoas[index].idade > 18 ? (
              <p>Usuário maior de idade</p>
            ) : (
              <p>Usuário menor de idade</p>
            )}
          </li>
        </ul>
      ) : (
        <li>Acabou</li>
      )}
    </div>
  );
};

export default UserDetails;
