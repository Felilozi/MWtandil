import React from 'react'

import { useSelector } from 'react-redux';

function BasicExample({ categoria }) {
    const productos = useSelector(state => state.unValor.productos);

    const productosPorCategoria = productos.filter(producto => producto.categoria === categoria);

    return (

        <div className="contenedor">
            {productosPorCategoria.map((producto, index) => (
                // <div key={index} className="tarjeta">
                <>
                    {producto.imagen.map((img, imgIndex) => (
                        <img key={imgIndex} src={img} alt={`Producto ${imgIndex + 1}`} className="imagen" />
                    ))}
                </>
            ))}
        </div>


    );
}

export default BasicExample;