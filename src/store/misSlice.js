import { createSlice } from "@reduxjs/toolkit";
const productos = [
    {
        id: 1,
        categoria: 'Madera',
        precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ],
        imagen: [
            '../assets/img/Madera/Cuchi madera.JPG',
            '../assets/img/Madera/Madera.jpg',
            '../assets/img/Madera/Imagen 289.jpg',
            '../assets/img/Madera/Cuchi mad.JPG',
            '../assets/img/Madera/Cuchillos de madera.jpg',
            '../assets/img/Madera/Imagen 289.jpg',

            
        ],
        descripcion: 'Cuchillos encabados en una o varias maderas con aplique de bronce y suela',
    },
    {
        id: 2, categoria: 'Combinado', precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ], imagen: [
            "../assets/img/Combinados/100_0373.JPG",
            "../assets/img/Combinados/100_0376.JPG",
            "../assets/img/Combinados/100_0384.JPG",
        ], descripcion: ""
    },
    {
        id: 3, categoria: 'Regionales', precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ], imagen: [
            "../assets/img/Regionales/Cuchillos Hueso.jpg",
            "../assets/img/Regionales/Imagen 028.jpg",
            "../assets/img/Regionales/Imagen 027.jpg",
        ], descripcion: ""
    },
    {
        id: 4, categoria: 'Conjuntos', precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ], imagen: [
            "../assets/img/Conjuntos/100_0326.JPG",
            "../assets/img/Conjuntos/100_0334.JPG",
            "../assets/img/Conjuntos/Imagen 250.jpg",
        
        ], descripcion: ""
    }


];
const categorias = ['Todos', 'Madera', 'Combinado', 'Regionales', 'Conjuntos'];
export const origenSlice = createSlice({
    //serie de datos 
    name: "unValor",
    initialState: { productos: productos, categorias:categorias},
    reducers: {
        guardarMiProductos: (state, action) => {
            state.productos = action.payload
            //modificar este valor 
        },
        guardarMiCategoria: (state, action) => {
            state.categorias = action.payload
            //modificar este valor 
        }
    }
})
export const { guardarMiProductos,guardarMiCategoria } = origenSlice.actions;