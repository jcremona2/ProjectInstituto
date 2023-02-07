import React from 'react'
import Card from 'react-bootstrap/Card';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        
        <Card className="bg-dark text-black">
            <Card.Img src={imagen} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title><b>{title}</b></Card.Title>
                <Card.Text><b>{subtitle}</b></Card.Text>
                <Card.Text><b>{body}</b></Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}


export default NovedadItem;