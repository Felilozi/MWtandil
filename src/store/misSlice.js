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
        ], imagen: [], descripcion: ""
    },
    {
        id: 3, categoria: 'Regionales', precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ], imagen: [], descripcion: ""
    },
    {
        id: 4, categoria: 'Conjuntos', precio: [
            { tamaño: 10, precio: 664 },
            { tamaño: 12, precio: 685 },
            { tamaño: 14, precio: 785 },
            { tamaño: 16, precio: 885 },
            { tamaño: 18, precio: 985 },
        ], imagen: [], descripcion: ""
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