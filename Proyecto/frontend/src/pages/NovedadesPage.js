import React from 'react'
import '../styles/components/pages/NovedadesPage.css'

const GaleryPage = (props) => {
    return (
        <section className='holder'>
            <div>
                <div className="row">
                    <div className="news-card row">
                        <div className="column">
                            <img src="../images/noticias/1.png" alt=""></img>

                        </div>
                        <div className="column">
                            <h2>Titulo 1</h2>
                            <h3>Informacion : lorem imsum ...</h3>
                            <h4>ultima actualizacion: 5h</h4>
                        </div>

                    </div>

                </div>
                    <div className="news-card row">
                        <div className="column">
                            <img src="../images/noticias/2.png" alt=""></img>

                        </div>
                        <div className="column">
                            <h2>Titulo 2</h2>
                            <h3>Informacion : lorem imsum ...</h3>
                            <h4>ultima actualizacion: 5h</h4>
                        </div>

                    </div>

                    <div className="news-card row">
                        <div className="column">
                            <img src="../images/noticias/3.png" alt=""></img>

                        </div>
                        <div className="column">
                            <h2>Titulo 3</h2>
                            <h3>Informacion : lorem imsum ...</h3>
                            <h4>ultima actualizacion: 5h</h4>
                        </div>

                    </div>

            </div>

        </section>
    )
}


export default GaleryPage;