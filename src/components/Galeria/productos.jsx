import React from 'react'
import Carrucel from "./carrucel";
import { useDispatch, useSelector } from 'react-redux';

const Productos = () => {
    const dispatch = useDispatch();//enviara para modificar
    const productos = useSelector(state=>state.unValor.productos)
    // const productos = [
    //     {
    //         id: 1,
    //         categoria: 'Madera',
    //         precio: [
    //             { tamaño: 10, precio: 664 },
    //             { tamaño: 12, precio: 685 },
    //             { tamaño: 14, precio: 785 },
    //             { tamaño: 16, precio: 885 },
    //             { tamaño: 18, precio: 985 },
    //         ],
    //         imagen: [
    //             '../assets/img/Madera/Cuchi madera.JPG',
    //             '../assets/img/Madera/Madera.jpg',
    //             '../assets/img/Madera/Imagen 289.jpg',
    //         ],
    //         descripcion: 'Cuchillos encabados en una o varias maderas con aplique de bronce y suela',
    //     },
    //     { id: 2, categoria: 'Combinado', precio: [
    //         { tamaño: 10, precio: 664 },
    //         { tamaño: 12, precio: 685 },
    //         { tamaño: 14, precio: 785 },
    //         { tamaño: 16, precio: 885 },
    //         { tamaño: 18, precio: 985 },
    //     ],imagen: [],descripcion:"" },
    //     { id: 3, categoria: 'Regionales',precio: [
    //         { tamaño: 10, precio: 664 },
    //         { tamaño: 12, precio: 685 },
    //         { tamaño: 14, precio: 785 },
    //         { tamaño: 16, precio: 885 },
    //         { tamaño: 18, precio: 985 },
    //     ],imagen: [],descripcion:""  },
    //     { id: 4, categoria: 'Conjuntos',precio: [
    //         { tamaño: 10, precio: 664 },
    //         { tamaño: 12, precio: 685 },
    //         { tamaño: 14, precio: 785 },
    //         { tamaño: 16, precio: 885 },
    //         { tamaño: 18, precio: 985 },
    //     ],imagen: [],descripcion:"" }
        
        
    // ];

    return (
        <div>{productos.map(producto=>(<Carrucel producto={producto}/>))}

        </div>
    );
};

export default Productos;
