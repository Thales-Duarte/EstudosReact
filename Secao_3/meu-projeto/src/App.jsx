import imagem_2 from './assets/imagem_2.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserNamer from './components/ShowUserNamer'
import {useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const name = "Matheus";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Vw", km: "1000", color: "Preto", newCar: true},
    {id: 2, brand: "Ford", km: "2000", color: "Branco", newCar: false},
    {id: 3, brand: "Fiat", km: "3000", color: "Vermelho", newCar: true},
    {id: 4, brand: "Chevrolet", km: "4000", color: "Azul", newCar: false},
    {id: 5, brand: "Renault", km: "5000", color: "Verde", newCar: true},

  ];

  function ShowMessage(){
    alert("Você clicou no botão");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id: 1, nome: "Matheus", idade: 25},
    {id: 2, nome: "Maria", idade: 30},
    {id: 3, nome: "João", idade: 35},
    {id: 4, nome: "José", idade: 40},
    {id: 5, nome: "Marcos", idade: 45},
  ]

  return (
       <div>
        <h1>Primeiros passos!</h1>
        {/* Imagem em public*/}
        <div>
          <img src="/imagem_1.jpg" alt="Lua muito foda" />
        </div>
        <div>
          <img src={imagem_2} alt="Frescura" />
          <br /><br />
        </div>
        <div>
          <ManageData />
        </div>
        <div>
          <ListRender/>
          <br /><br />
          <CondicionalRender />
          <br /><br /> 
          {/* Passando props */}
          <ShowUserNamer name={userName} />
          <br /><br />
          {/* destructuring */}
          <CarDetails brand="Vw" km="1000" color="Preto" newCar={true}/>
          <br /><br />
          {/* reaproveitando */}
          <CarDetails brand="Ford" km="2000" color="Branco" newCar={false}/>
          <CarDetails brand="Fiat" km="3000" color="Vermelho" newCar={true}/>
          <br /><br />
          {/* loop em array de objetos */}
          {cars.map((car) => (
            <CarDetails 
            key={car.id}
            brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar={car.newCar}/>
          ))}
          <br /><br />
          {/* Fragment */}
          <Fragment propFragment ="Teste"/>
          <br /><br />
          {/* Children prop */}
          <Container value="Teste">
            <p>Este é o conteudo</p>
            <h5>Testando o container</h5>
          </Container>
          <br /><br />
          {/* Funções em props*/}
          <ExecuteFunction ShowMessage={ShowMessage}/>
          <br /><br />
          {/* State lift*/}
          <Message msg={message}/>
          <ChangeMessageState handleMessage={handleMessage}/>
          <br /><br />
          {/*tarefa*/}
          <UserDetails pessoas = {pessoas}/>




        </div>
        
        
        
       </div>
  )
}

export default App
