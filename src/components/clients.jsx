import React from 'react'

const Clients = () => {
    return (
        <div class="clients-container">
            <article className='client-card'>
                <img className='logo-client' src='/assets/images/adidas.png'/>
                <section>
                    <h3 className='client-name'>Adidas</h3>
                    <p className='client-text'>Texto de prueba</p>
                </section>
            </article>
            <article className='client-card'>
                <img className='logo-client'/>
                <section>
                    <h3 className='client-name'>Reebook</h3>
                    <p className='client-text'>Texto de prueba</p>
                </section>
            </article>
            <article className='client-card'>
                <img className='logo-client'/>
                <section>
                    <h3 className='client-name'>Levis</h3>
                    <p className='client-text'>Texto de prueba</p>
                </section>
            </article>
        </div>
    )
}

export default Clients;