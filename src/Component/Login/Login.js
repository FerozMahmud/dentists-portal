import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            {/* -----------------
            ----Header Part------
            --------------------- */}
            <Header></Header>


            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to Dentist's Portal? <Link to="/register">Create Account</Link></p>
            <div>---------------or-----------------</div>
            <button className="btn-primary" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>



    );
};

export default Login;