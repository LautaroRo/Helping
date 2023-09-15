import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const NavBar = ({Greeting,Setgreeting}) => {
    const Menos = (e) => {
        e.preventDefault()

        Setgreeting(Greeting - 1)
    }
    return (
        <header>
            <h1>
                Nav
            </h1>
            <nav>
                <ul>
                    <li>{ Greeting > 0 ? <span onClick={Menos} className='menos'>X</span> : null}<FontAwesomeIcon icon={faCartShopping}/><span className='mas'>{Greeting}</span></li>
                    <li>Inicio</li>
                    <li>Acerca</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar