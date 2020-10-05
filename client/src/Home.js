import React from "react";
import Services from './Services';
import HomeHotels from './HomeHotels';
import HomeLandingSection from './HomeLandingSection';

const Home = () => {
    return (
        <>
            <HomeLandingSection/>
            <Services/>
            <HomeHotels/>
        </>
    )
}

export default Home;