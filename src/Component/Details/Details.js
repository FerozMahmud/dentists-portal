import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Details = () => {
    const { serviceId } = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('https://ferozmahmud.github.io/services-data/Services.JSON')
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [])

    const matchingService = details.find((detail) => detail.id = parseInt(serviceId));

    const { title, image, discription } = matchingService || {};
    return (
        <div>
            {/* -----------------
            ----Header Part------
            --------------------- */}
            <Header></Header>


            {/* -----------------
            ----Services Details Part------
            --------------------- */}
            <div className=' container-fluid detail'>
                <div className='row'>
                    <div className='col-lg-12 col-md-6 col-12'>
                        <h2 className='pb-3'>Book <span className='text-success fs-1'>{title}</span></h2>
                        <img className='img-fluid' src={image} alt="" />
                        <p className='text-primary pt-5 fs-3'>{discription}</p>
                    </div>
                </div>
            </div>

            {/* -----------------
            ----Footer Part------
            --------------------- */}
            <Footer></Footer>
        </div>
    );
};

export default Details;