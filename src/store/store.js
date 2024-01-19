import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./misSlice";
export default configureStore({
    reducer:{
        //todo los valores que vayamos a obtener
        //Dar un nombre a cada estado 
        unValor:origenSlice.reducer//recibir y modificarlo, le podemos dar cualquier nombre
    }
}) 