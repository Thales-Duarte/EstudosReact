import { useSearchParams, Link} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const url = "http://localhost:3001/produtos?" + searchParams
    const {data:items, loading, error} = useFetch(url);
    const params = searchParams.get("q")
    const filteredItems = items.filter((item) => item.nome === params)

  return (
    <div>
        <h1>Resultados Disponíveis</h1>
        <ul>
            {filteredItems &&
                filteredItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.nome}</h2>
                        <p>R$: {item.price}</p>
                        <Link to={`/produtos/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
        </ul>


    </div>
  )
}

export default SearchPage