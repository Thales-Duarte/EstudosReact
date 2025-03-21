//import { useContext } from "react"
//import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext"

//context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext();

  // context mais complexo
  const {color, dispatch} = useTitleColorContext();

  // alterando state complexo
  const setTitleColor = (color) => {
    dispatch( {type: color})
  }


  return (
    <div>
     <h2 style={{color: color}}>Home</h2>
     <p>Valor do contador: {counter}</p>
     {/* Alterando o Valor do context */}
     <ChangeCounter/>
     {/* alterando o contexto complexo */}
     <div>
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
     </div>
    </div>
  )
}

export default Home