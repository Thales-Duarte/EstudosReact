import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFectch'

const url = 'http://localhost:3000/produtos'


function App() {


  const {data: items, httpConfig, loading, error} = useFetch(url);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  //1 - resgatando os dados da API
  //useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch(url);
  //    const data = await res.json();
  //    setProducts(data);
  //  }
  //  fetchData();

  //}, []);

  // 2 - adicionando um novo produto na api e atualizando a lista de produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nome,
      preco,
    };

    //const res = await fetch(url, {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify(produto),
    //});
    
    // 3 - atualizando a lista de produtos

    //const addedProduct = await res.json();

    //setProducts((prevProducts) =>[...prevProducts, addedProduct]);

    //reafatorando POST
    httpConfig(produto, "POST");

    //limpar os campos
    setNome('');
    setPreco('');


  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  

  return (
    <>
      <div className='App'>
        {/* UseEffect*/}
        <h1>Lista de Produtos</h1>
        
        {/* 4 - renderizando a lista de produto apenas se ja existirem dados*/}
        {loading ? <p>Carregando...</p> : null}
        {error && <p>{error}</p>}
        {!loading && 
          (<ul>
          {items && items.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R$ {produto.preco}
              <button onClick={() => handleRemove(produto.id)}>Excluir</button>
            </li>
          ))}

        </ul>)}
        <div className='add_product'>{/* Adicionar um novo produto*/}
        <h2>Adicionar um novo produto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nome do Produto'
            value={nome}
            name='nome'
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <input
            type='text'
            placeholder='Preço do Produto'
            value={preco}
            name='preco'
            onChange={(e) => setPreco(e.target.value)}
          />
          <br />
          {/* LOADING*/}
          {loading && (<button type='submit' value="Aguarde" disabled>Aguarde</button>)}
          {!loading && (<button type='submit' value="criar">Adicionar</button>)}
          </form>
        </div>
        

      </div>
    </>
  )
}

export default App
