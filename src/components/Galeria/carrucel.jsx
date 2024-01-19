import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabla from './tabla';




const Carrucel = ({producto}) => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="container bg-body">
                    <h2 className="text-center">{producto.categoria}</h2>
                    <div className="d-flex row  justify-content-center align-items-start">
                        <div className=" d-flex align-items-center col-lg-6 col-xs-12 ">
                        {producto.imagen.length > 0 && (
                            <Carousel className='carousel-container'>
                            {producto.imagen.map(img=>(
                                <Carousel.Item className='carousel-item carouselgal-item'>
                                    <img src={img} className="d-block" alt="Cuchi madera" />
                                </Carousel.Item>))}
                            </Carousel>)}
                        </div>
                        
                        <div className="col-lg-6 col-xs-12">
                            <p>{producto.descripcion}</p>
                            <Tabla precio={producto.precio}/>
                            <Link to={`/${producto.categoria}`}><p className="text-center"><button className="btn btn-lg bg-dark text-white text-center" >Leer Más</button></p></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrucel