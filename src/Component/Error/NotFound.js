import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='error'>
            <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
            <br />
            <Link to="/"><button type="button" className="btn btn-success">Go Back</button></Link>
        </div>
    );
};

export default NotFound;