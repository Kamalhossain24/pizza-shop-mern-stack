import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className='hero '>
        <div className="card bg-dark text-white border-0">
            <img src='images/banner.jpg' width='100%' className="card-img" alt="banner" />
            <div class="overlay overlay-bg"></div>


            <div className="card-img-overlay p-hero d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-hedding fw-bolder mb-3">For The Love Of Food</h5>
                    <p className="card-text fs-disc lead mb-3">With the largest delivery platform in India</p>
                    <Link to='/' className="hero_btn_none btn btn-outline-light">See More Latest Food</Link>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Hero