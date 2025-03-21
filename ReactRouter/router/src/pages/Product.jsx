import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
   // rota dinamica
   const {id} = useParams();

   // carregamento de dado individual
   const url = "http://localhost:3001/produtos/" + id;


   const{data:product, loading, error} = useFetch(url)

   console.log(product)

   
  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.nome}</h1>
            <p>R$: {product.preco}</p>
            {/* Nested Routes */}
            <Link to={`/produtos/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
    </>
  )
}

export default Product