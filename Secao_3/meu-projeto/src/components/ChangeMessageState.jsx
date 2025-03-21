import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4", "Mensagem 5"];

    const press = () => {
        const index = Math.floor(Math.random() * messages.length);
        handleMessage(messages[index]);
    }

  return (
    <div>
        <button onClick={press}>Mudar mensagem</button>
    </div>
  )
}

export default ChangeMessageState