import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="container">
            <h2>Recent News</h2>
            <div className="row row-cols-1 row-cols-md-2 m-4">
                <div className="col">
                    <div className="card h-100 bg-light">
                        <img src="https://www.usahealthsystem.com/uploads/news/_newsCard1x/uh-pharmacy.jpg?20211019112018" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Pharmacy residency programs offer specialized training</h5>
                            <p className="card-text">Allen Broome, Pharm.D., director of health system pharmacy at USA Health, said that residency training benefits the profession long term and expands the ability to care for current and future patients.</p>
                        </div>
                        <div>
                            <Link to="/">Read More ➣</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-light">
                        <img src="https://www.usahealthsystem.com/uploads/news/_newsCard1x/cwh-peds-ed-expansion1.jpg?20211006111307" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Expansion of Pediatric Emergency Center at USA Health Children’s & Women’s Hospital marked with ground-breaking ceremony</h5>
                            <p className="card-text">USA Health today formally kicked off construction of an expansion of the Pediatric Emergency Center at Children’s & Women’s Hospital at its campus in Midtown Mobile.</p>
                        </div>
                        <div>
                            <Link to="/">Read More ➣</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 11 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;