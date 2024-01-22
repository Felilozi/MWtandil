import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

const HeaderBar = () => {
    const categorias = useSelector(state => state.unValor.categorias)

    return (
        <div className='container-fluid header sticky-top'>
            <Navbar data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">MW-Tandil</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Galeria" id="basic-nav-dropdown">
                                {categorias.map((categoria, index) =>
                                    <>
                                        {index === 1 && <NavDropdown.Divider />}
                                        <NavDropdown.Item href={`/${categoria}`}>
                                            {categoria === 'Todos' ? 'Todos los productos' : categoria}
                                        </NavDropdown.Item>
                                    </>
                                )}


                            </NavDropdown>
                            <Nav.Link href="#link">Contactos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default HeaderBar


// (categoria === 'Todos' ?
// <NavDropdown.Item href={categoria }>Todos los productos</NavDropdown.Item>:

// <NavDropdown.Item href={categoria }>{categoria }</NavDropdown.Item>

// )