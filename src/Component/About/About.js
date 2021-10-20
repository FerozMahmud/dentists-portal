import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            {/* -----------------
            ----Header Part------
            --------------------- */}
            <Header></Header>


            {/*------------------------------------
            ------ About Section Start Here-----
            ------------------------------------ */}
            <section className="container">
                <div className="pb-3">
                    <h1 className="p-5">About Us</h1>
                    <p>We are careful to look for all kinds of facilities and good doctors and clinics for your well-being. We will never accept a system where the patient or clinic is at a disadvantage. We will always work for your well being. Today, we help clinics improve efficiency and better connect withtheir patients through tools like online appointments, recalls, reminders, results, new patient registration, and check-in.</p>
                </div>
                <div className="p-3">
                    <h3>Our Team</h3>
                    <p>We are honored to have an experienced dental team with some of the best in clinical and administrative staff in the Golden Isles. Our friendly professionals want to provide you with the most comfortable and efficient dental experience possible. We are ready to assist you with any questions you may have concerning your oral health.</p>
                    <div>
                        <div class="row">
                            <div class="col-sm-12 col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img width="150px" src="https://dentistryinredfern.com/site-redfern/assets/files/3815/terri-smith-375.375x375.webp" alt="" className="rounded-circle" />
                                        <h5 class="card-title">Terri Smith</h5>
                                        <p class="card-text">Registered Dental Hygienist</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img width="150px" src="https://dentistryinredfern.com/site-redfern/assets/files/3817/heather-lancaster-375.375x375.webp" alt="" className="rounded-circle" />
                                        <h5 class="card-title">Debra Cranmer</h5>
                                        <p class="card-text">Registered Dental Hygienist</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img width="150px" src="https://dentistryinredfern.com/site-redfern/assets/files/3818/debbie-white-375.375x375.webp" alt="" className="rounded-circle" />
                                        <h5 class="card-title">Heather Lancaster</h5>
                                        <p class="card-text">Registered Dental Hygienist</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <img width="150px" src="https://dentistryinredfern.com/site-redfern/assets/files/3816/debra-cranmer-375.375x375.webp" alt="" className="rounded-circle" />
                                        <h5 class="card-title">Debra Cranmer</h5>
                                        <p class="card-text">Registered Dental Hygienist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default About;