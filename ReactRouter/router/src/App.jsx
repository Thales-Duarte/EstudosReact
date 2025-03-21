import './App.css'

//config react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Search from './components/Search';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import SearchPage from './pages/SearchPage';


function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
      {/* SEARCH */}
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* Rota Dinamica */}
        <Route path="/produtos/:id" element={<Product/>}/>
        {/* Nested Route */}
        <Route path="/produtos/:id/info" element={<Info/>}/>
        {/* Search Page */}
        <Route path="/search" element={<SearchPage/>}/>
        {/* redirect */}
        <Route path="/company" element={<Navigate to="/about"/>}/>
        {/* No match Route*/}
        <Route path="*" element={<NotFound/>}/>
  

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
