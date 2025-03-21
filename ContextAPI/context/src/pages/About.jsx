import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


const About = () => {
  const {counter} = useContext(CounterContext);

  return (
    <div>
        <h2>About</h2>
        <p>Valor do contador: {counter}</p>

    </div>
  )
}

export default About