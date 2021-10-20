import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-light p-2'>
            {/* ..........top right part of footer section...........  */}
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className='pb-4'>
                        <h1><strong>Dentist's</strong> <span className="text-info">Portal</span></h1>
                        <p>Your New Smile Starts Here</p>
                    </div>
                </div>


                <div className="col-md-6 col-sm-12">
                    <div className="footer-menu-container">
                        <h4>Submit your email to get update</h4>
                        <div>
                            <input
                                className="p-2 mt-3"
                                type="text"
                                placeholder="Enter Email"
                            />
                            <button className=" btn text-white bg-success">Submit</button>
                        </div>
                    </div>
                </div>



            </div>
            <br />
            <hr />
            {/* ..........bottom part of footer section...........  */}
            <p>Copyright © 2021 || <strong>Dentist's <span className="text-info">Portal</span></strong></p>
        </div>
    );
};

export default Footer;