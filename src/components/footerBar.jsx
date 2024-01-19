
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react'
const FooterBar = () => {
  return (
    <div>
      <footer className="piePag container-fluid">
        <div classNameName="container row flex-dinamic-row">
          <div className="col-sm">

          </div>
          <div className="col-sm flex-dinamic-row "> 
            <a href="https://www.instagram.com/" >INSTAGRAM
              <i className="fa-brands fa-instagram instagram hvr-wobble-skew"></i>
            </a>
            <a href="https://www.facebook.com/" >FACEBOCK
              <i className="fa-brands fa-facebook px-4 instagram hvr-wobble-skew"></i>
            </a>

          </div>
          <div className="col-sm align-self-start">
            <p className="text-center ">&copy;Todos los derechos reservados 2023 Diseño: Hacia el Feliz 
              <a  className="mx-2 " href="https://www.linkedin.com/in/haian-donofrio-7293a358/"><FontAwesomeIcon icon={faLinkedinIn} color='white' /></a>
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}
export default FooterBar
