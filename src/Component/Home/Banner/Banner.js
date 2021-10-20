import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className="h-100">
                <Carousel.Item>
                    <img className="img-fluid w-75"
                        src="https://images.squarespace-cdn.com/content/v1/5269fbd3e4b0eb2b76ccc1db/1582313117687-0T3XFNHLID9962LQLHIQ/how-to-become-a-dentist.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1><strong>Your New Smile</strong></h1>
                        <h1><strong>Starts Here</strong></h1>
                        <h4>Let us change the way you feel about the dentist.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid w-75"
                        src="http://thesocialnewspaper.com/wp-content/uploads/2019/07/7-Steps-to-Becoming-a-Rich-Dentist-Even-with-200000-to-600000-of-Student-Loan-Debt-no1-min.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1><strong>Your New Smile</strong></h1>
                        <h1><strong>Starts Here</strong></h1>
                        <h4>Let us change the way you feel about the dentist.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid w-75"
                        src="https://sixsigmadental.com/wp-content/uploads/2019/03/home_dental_department_6.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1><strong>Your New Smile</strong></h1>
                        <h1><strong>Starts Here</strong></h1>
                        <h4>Let us change the way you feel about the dentist.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;