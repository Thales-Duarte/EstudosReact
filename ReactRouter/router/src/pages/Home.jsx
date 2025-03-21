import {Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css'


const Home = () => {
  // carregando dados
  const url = 'http://localhost:3001/produtos'
  const {data: items, loading, error} = useFetch(url);
  const handleDelete = () => {
    
  }


  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className='produtos' >
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>R$: {item.preco}</p>
            <Link to={`/produtos/${item.id}`}>Detalhes</Link>
            <br /><br />
            <button onClick={handleDelete}>Excluir</button>
            
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Home;