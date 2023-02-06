
import '../styles/components/pages/HomePage.css'
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
    return (
        <div className="home">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/home/1.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/home/3.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="../images/home/4.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

        </div>

    );
}

export default HomePage;

