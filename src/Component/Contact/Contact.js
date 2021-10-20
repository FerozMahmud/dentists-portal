import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
            {/* -----------------
            ----Header Part------
            --------------------- */}
            <Header></Header>


            {/*------------------------------------
            ------ Contact Section Start Here-----
            ------------------------------------ */}
            <section className="container">
                <div className="pb-3">
                    <div className="p-5">
                        <h1>Contact Us</h1>
                    </div>
                    <div className=''>
                        <Row xs={1} md={2}>
                            <Col>
                                <h3>Contacts</h3>
                                <p><strong>Dentist's</strong> <span className="text-primary">Portal</span> Pvt Ltd.</p>
                                <p>(02) 09524685</p>
                                <p>99, Doctor's Tower</p>
                                <p>Sec:11/b, Uttara, Dhaka-1200</p>
                                <br />
                                <br />
                                <h3>Hours</h3>
                                <p>Mon - Thu | 8am - 10pm</p>
                                <p>Friday | By Appointment</p>
                            </Col>


                            <Col>
                                <h3>Feedback</h3>
                                <form className="w-75 mx-auto">
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form4Example1">Name:</label>
                                        <input type="text" id="form4Example1" className="form-control" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form4Example2">Email address:</label>
                                        <input type="email" id="form4Example2" className="form-control" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form4Example3">Comment / Question:</label>
                                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>

            </section>

            {/* -----------------
            ----Footer Part------
            --------------------- */}
            <Footer></Footer>
        </div>
    );
};

export default Contact;