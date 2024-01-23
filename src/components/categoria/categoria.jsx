import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './card'



const Categoria = ({ categoria }) => {
    return (
        <>
            
            <div>
                <h1 className='text-center'>{categoria}</h1>
                <BasicExample categoria={categoria}/>
            </div>
            
        </>
    )
}

export default Categoria