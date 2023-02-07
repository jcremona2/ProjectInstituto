import React from 'react'
import '../styles/components/pages/NosotrosPage.css'
import Accordion from 'react-bootstrap/Accordion';

const NosotrosPage = (props) => {

    return (
        <div className="nosotros-container">

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Misión</Accordion.Header>
                    <Accordion.Body>
                        NUESTRA MISIÓN SE REPRESENTA EN NUESTRO LEMA: “COMPROMETIDOS EN CREAR OPORTUNIDADES.”
                        <br></br>
                        <br></br>
                        <ul>
                            <li> ¿Por qué “comprometidos”? Porque todos los integrantes de la comunidad educativa Moglia perseguimos un objetivo común y actuamos en consecuencia.</li>
                            <br></br>
                            <li> ¿Por qué “crear”? Porque habilitamos el espacio para que cada uno pueda desarrollar al máximo sus potencialidades.</li>
                            <br></br>
                            <li> ¿Por qué “oportunidades”? Porque ofrecemos un caudal amplio de opciones para que cada uno encuentre su lugar ideal.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Historia</Accordion.Header>
                    <Accordion.Body>
                        Corría el año 1989 cuando una ciudadana llamada Solana Moglia decidió fundar una escuela en un terreno que se situaba en Humberto Primo 570, en la localidad de Quilmes.<br></br>
                        Solana, Sin ser docente en ese momento sentía la necesidad de aportar a la comunidad, desde su conocimiento y amor por la educación. Así, decidió empezar con el centro de estudios 'Moglia', que con el correr de los años se convirtiría en el Instituto Moglia.<br></br>
                        El camino fue duro y largo, sufrió altibajos y dificultades, pero nunca bajó los brazos.<br></br>
                        Acompañada por personas que compartían los mismos ideales, Solana logró perseverar ante la adversidad, convirtiendo a la educación en su razón de ser.<br></br>
                        Fue una fuerza permanente, y año tras año más familias se sumaban a este proyecto, lo que comprometía aún más a los fundadores a continuar creciendo y desarrollando una enseñanza de vanguardia en un edificio que se construía acorde a las necesidades que se producían.<br></br>
                        Muchas personas nos fuimos sumando a esta hermosa travesía, apasionados por lo que hacemos.<br></br>
                        El Instituto Moglia es el reflejo de lo que hicieron tantas personas que pasaron por él y somos tantas otras que aquí seguimos construyendo su historia.<br></br>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Nuestros Valores</Accordion.Header>
                    <Accordion.Body>
                        Nuestras acciones dan testimonio sobre los valores que forman parte de nuestra esencia. 
                        <br></br>
                        Estos son:
                        <br></br>
                        <ul>
                            <li>Acompañamos el pensar y sentir del otro, a través de la escucha y la empatía. -Respeto-</li>
                            <br></br>
                            <li>Buscamos innovar en cada uno de los espacios y proyectos para que el estudiante tenga la libertad de crear dejando volar su imaginación. -Creatividad-</li>
                            <br></br>
                            <li>Apasionados con nuestra tarea, cada uno de los integrantes del equipo IBA se destaca por su responsabilidad y compromiso. -Responsabilidad-</li>
                            <br></br>
                            <li>Bregamos por construir cimientos fiables sobre los cuales nos desarrollamos como personas. -Confianza-</li>
                            <br></br>
                            <li> Trabajamos para desarrollar y afianzar en nosotros y en el otro, personas que adviertan las necesidades de la comunidad para poder ayudar y acompañar desinteresadamente. -Solidaridad-</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}


export default NosotrosPage;