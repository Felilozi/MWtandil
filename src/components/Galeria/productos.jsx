import React from 'react'
import Carrucel from "./carrucel";
import {  useSelector } from 'react-redux';

const Productos = () => {
    // const dispatch = useDispatch();//enviara para modificar
    const productos = useSelector(state=>state.unValor.productos)
    return (
        <div>{productos.map(producto=>(<Carrucel producto={producto}/>))}

        </div>
    );
};

export default Productos;
