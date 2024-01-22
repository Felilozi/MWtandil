import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Carousel className='container-fluid bg-dark '>
                <Carousel.Item className='vh-75'>
                    <img src="../assets/img/Dagas-Cuchillas-Monte/Cuchillos de monte.jpg" alt="MDN" />
                    <Carousel.Caption>
                        <div class="carousel-caption text-start">
                            <h2 class="tittle2">MW TANDIL</h2>
                            <p >Inspirate con nuestros trabajos anteriores</p>
                            <Link to="/Todos" >  <p><button class="btn btn-lg bgBoton text-white" >Leer Más</button></p></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className='vh-75'>
                    <img src="../assets/img/Regionales/cuchillos1 080.jpg" alt="MDN" />
                    <Carousel.Caption>
                        <div class="carousel-caption text-center">
                            <h2 class="tittle2">MW TANDIL</h2>
                            <p ></p>
                            <Link to="/Todos" > <p><button class="btn btn-lg bgBoton text-white" >Leer Más</button></p></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className='vh-75'>
                    <img src="../assets/img/verano2007038.jpg" alt="MDN" />
                    <Carousel.Caption>
                    <h2 class="tittle2">MW TANDIL</h2>
                        <p ></p>
                        <Link to="/Todos" > <p><button class="btn btn-lg bgBoton text-white">Leer Más</button></p></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Home