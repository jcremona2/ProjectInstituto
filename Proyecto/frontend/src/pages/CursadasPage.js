
import React from 'react'
import '../styles/components/pages/CursadasPage.css'




const NosotrosPage = (props) => {
    return (
        <div className="container institucional">


            <div className="card">
                <a href="/contacto" className="stretched-link">
                    <img src="/images/nosotros/3.png" className="card-img-top" alt="Impa" /></a>
                <div className="card-body">
                    <h5 className="card-title ">Ingreso IMPA</h5>
                    <p className="card-text">Preparación de ingreso Escuela de Educacion Secundaria Técnica Nº7</p>
                </div>

            </div>
            <div className="card">
                <a href="/contacto" className="stretched-link">
                    <img src="/images/nosotros/1.png" className="card-img-top" alt="Primario" /></a>
                <div className="card-body">
                    <h5 className="card-title">Primario</h5>
                    <p className="card-text">Clases de apoyo para nivel Primario, todas las materias. </p>
                </div>
            </div>


            <div className="card">
                <a href="/contacto" className="stretched-link">
                    <img src="/images/nosotros/4.png" className="card-img-top" alt="Secundario" /></a>
                <div className="card-body">
                    <h5 className="card-title"> Secundario</h5>
                    <p className="card-text">Clases de apoyo para nivel Secundario, preparación para exámenes.  </p>
                </div>
            </div>


            <div className="card">
                <a href="/contacto" className="stretched-link">
                    <img src="/images/nosotros/2.png" className="card-img-top" alt="Universitario" /></a>
                <div className="card-body">
                    <h5 className="card-title ">Ingreso Universitario</h5>
                    <p className="card-text">Clases de apoyo para nivel Universitario, cursos de ingreso y primeros años </p>
                </div>
            </div>
        </div>

    )
}


export default NosotrosPage;