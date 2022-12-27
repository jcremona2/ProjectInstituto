import React from 'react'
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <section className='holder contacto'>
            <form >
                <h3>Formulario de Contacto</h3>
                <div>
                    <label for="inputnombre" >Nombre</label>
                    <input type="text" id="inputnombre" />
                </div>
                <div>
                    <label for="inputapellido" >Apellido</label>
                    <input type="text" id="inputapellido" />
                </div>
                <div>
                    <label for="inputmail" >Mail</label>
                    <input type="email" id="inputmail" />
                </div>
                <div>
                    <label for="inputciudad" >Ciudad</label>
                    <input type="text" id="inputciudad" />
                </div>
                <div>
                    <label for="inputprovincia" >Provincia</label>
                    <input type="text" id="inputprovincia" />
                </div>
                <div>
                    <label for="inputconsulta" >Consulta</label>
                    <textarea id="inputconsulta" ></textarea>
                </div>
                <div>
                    <input type="checkbox" />
                    <label >
                        Quiero que me envien las ultimas novedades
                    </label>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}


export default ContactoPage;