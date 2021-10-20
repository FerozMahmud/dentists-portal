import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    // const { service } = props;
    const { title, image, description, id } = props.service;
    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <img src={image} className="card-img-top" height='250' width='200' alt="" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div className="mb-3">
                    <Link to={`/details/${id}`}><span><button className='btn btn-dark px-5'>Book '{title}'</button></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;