import React from 'react'
import '../styles/components/pages/NovedadesPage.css'
import Card from 'react-bootstrap/Card';

const GaleryPage = (props) => {
    return (
        <section className='holder'>
            <Card className="bg-dark text-black">
                <Card.Img src="../images/noticias/1.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><b>Card Title</b></Card.Title>
                    <Card.Text><b>                
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</b>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black">
                <Card.Img src="../images/noticias/2.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><b>Card Title</b></Card.Title>
                    <Card.Text><b>                
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</b>

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black">
                <Card.Img src="../images/noticias/3.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><b>Card Title</b></Card.Title>
                    <Card.Text><b>                
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</b>

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>


        </section>
    )
}


export default GaleryPage;