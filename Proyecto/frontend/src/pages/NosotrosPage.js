import React from 'react'

const NosotrosPage = (props) => {
    return (


        <div className="container">


            <div className="tab-content" id="myTabContent">
                <div className="container institucional">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card">
                                <a href="/contacto.html" className="stretched-link">
                                    <img src="/images/impa.jpg" className="card-img-top" alt="Impa" /></a>
                                <div className="card-body">
                                    <h5 className="card-title ">Ingreso IMPA</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card">
                                <a href="/contacto.html" className="stretched-link">
                                    <img src="/images/schoolbus.jpg" className="card-img-top" alt="Primario" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">Primario</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="card">
                                <a href="/contacto.html" className="stretched-link">
                                    <img src="/images/school.jpg" className="card-img-top" alt="Secundario" /></a>
                                <div className="card-body">
                                    <h5 className="card-title"> Secundario</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a href="/contacto.html" className="stretched-link">
                                    <img src="/images/uni.jpg" className="card-img-top" alt="Universitario" /></a>
                                <div className="card-body">
                                    <h5 className="card-title ">Ingreso Universitario</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default NosotrosPage;