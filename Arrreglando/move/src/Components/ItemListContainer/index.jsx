import React from 'react'
import "./estilos.css"
const ItemListContainer = ({Setgreeting,greeting}) => {


    const sumar = (e) => {
        e.preventDefault()
        Setgreeting(greeting + 1)
    }
    return (
        <div className='containerList'>
            <h3>Observa nuestros productos!</h3>
            <div className="containerProductos">
                <section>
                    <article>
                        <div className='MK'/>
                        <button onClick={sumar}>Comprar</button>
                    </article>
                </section>

                <section>
                    <article>
                        <div className='Cod' />
                        <button onClick={sumar}>Comprar</button>
                    </article>
                </section>

                <section>
                    <article>
                        <div className='Red' />
                        <button onClick={sumar}>Comprar</button>
                    </article>
                </section>

                <section>
                    <article>
                        <div className='Gta' />
                        <button onClick={sumar}>Comprar</button>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default ItemListContainer