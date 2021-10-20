import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Footer from '../Footer/Footer';
import News from './News/News';
import Welcome from './Welcome/Welcome';


const Home = () => {
    return (
        <div>
            {/* -----------------
            ----Header Part------
            --------------------- */}
            <Header></Header>

            {/*------------------------------------
            ------ Carousel Section Start Here----- 
            ------------------------------------ */}
            <Banner></Banner>

            {/*------------------------------------
            ------ Welcome Section Start Here----- 
            ------------------------------------ */}
            <Welcome></Welcome>

            {/*------------------------------------
            ------ Service Section Start Here-----
            ------------------------------------ */}
            <Services></Services>

            {/*------------------------------------
            ------ News Section Start Here-----
            ------------------------------------ */}
            <News></News>


            {/* -----------------
            ----Footer Part------
            --------------------- */}
            <Footer></Footer>

        </div >
    );
};

export default Home;