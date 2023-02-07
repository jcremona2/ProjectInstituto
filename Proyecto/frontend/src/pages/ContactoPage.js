import React, { useState } from 'react'
import '../styles/components/pages/ContactoPage.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';





const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        apellido:'',
        email: '',
        mensaje: '',
        ciudad:'',
        subscribe:''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));

    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacto`);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mensaje);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <section className='contacto'>
            
            <Form className='form1' onSubmit={handleSubmit}>
                <h3>Formulario de Contacto</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name='nombre' value={formData.nombre} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" name='apellido' value={formData.apellido} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="Mail" name='email' value={formData.email} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formcity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control placeholder="Ciudad" name='ciudad' value={formData.ciudad} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMensaje">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control placeholder="Consulta a realizar"  name='mensaje' value={formData.mensaje} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Subscribirme a la Página" value={1} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
            </Button>
            {sending ? <p> Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

            </Form>
            

        </section>
    )
}


export default ContactoPage;