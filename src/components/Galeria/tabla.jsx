import React from 'react'

const Tabla = ({precio}) => {
    return (
        <table className="table">
            <thead >
                <tr>
                    <th scope="col">Tamaño</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            {precio.map(precioItem =><tbody  >
                <tr key={precioItem.tamaño}>
                    <th scope="row">{precioItem.tamaño}</th>
                    <td>$ {precioItem.precio}</td>
                </tr>
                
            </tbody>)}
        </table>

    )
}

export default Tabla