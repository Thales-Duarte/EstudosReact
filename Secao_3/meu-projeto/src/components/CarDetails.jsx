import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <div><h2>Detalhes do carro</h2></div>
        <div>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar ? <p>Este carro é novo</p> : <p>Usado</p>}
        </div>
    </div>
  )
};

export default CarDetails;