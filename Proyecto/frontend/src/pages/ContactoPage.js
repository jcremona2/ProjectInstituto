import React from 'react'
import '../styles/components/pages/ContactoPage.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContactoPage = (props) => {
    return (
        <section className='contacto'>

            <Form className='form1'>
                <h3>Formulario de Contacto</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control placeholder="Mail" />
                </Form.Group>
        
                <Form.Group  className="mb-3" controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="email" placeholder="Ciudad" />
                </Form.Group>
    

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Consulta a realizar" />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Subscribirme a la Página" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </section>
    )
}


export default ContactoPage;