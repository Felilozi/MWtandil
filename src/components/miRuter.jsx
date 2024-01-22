import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from './footerBar';
import Productos from './Galeria/productos';
import Categoria from './categoria/categoria';
import HeaderBar from './headerBar';
import Home from './home';



const MiRuter = () => {
    const categorias = useSelector(state => state.unValor.categorias)
    return (
        <Router>
            <HeaderBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                {categorias.map((categoria) => (
                    <Route

                        key={categoria}
                        path={`/${categoria}`}
                        element={categoria === 'Todos' ? <Productos /> : <Categoria categoria={categoria} />}
                    />))}
            </Routes>
            <FooterBar/>
        </Router>
    )
}

export default MiRuter