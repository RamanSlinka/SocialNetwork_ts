import React from 'react';
import image from '../../assets/images/slider/auto1.jpg'
import image2 from '../../assets/images/slider/auto.jpg'
import image3 from '../../assets/images/slider/auto2.jpg'
import image4 from '../../assets/images/slider/auto3.jpg'
import image5 from '../../assets/images/slider/auto4.jpg'
import {Carousel} from "react-bootstrap";
import style from '../Common/SCSS/common.module.scss'


const CarouselPage = () => {
    return (
        <div>
            <Carousel
                className={style.carouselStyle}
                indicators={false}
                controls={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>


    );
};
export default CarouselPage;