import React from 'react';
import Header from '../Shared/Header/Header';
import project2 from '../../img/project2.JPG'
import project21 from '../../img/project21.JPG'
import project22 from '../../img/project22.JPG'
import project23 from '../../img/project23.JPG'
import Footer from '../Shared/Footer/Footer';


const TavelBD = () => {
    return (
        <div className="">
            <Header></Header>
            <h3 className="primary-color text-center">TravelBD Project Details</h3>
            <div className="container">
                <h5 className="mt-2">Features :</h5>
                <ul className="p-color">
                    <li>This is a travel agency’s website where users can book packages when logged in.</li>
                    <li>And also view their bookings on the Booking page.</li>
                    <li>An admin can insert, update and delete products and do others operations.You can also manages packages</li>
                    <li>Easy to use & simple user interface.</li>
                </ul>
                <a className="btn btn-color2 me-2 mb-2" href="https://travel-1d0b6.web.app/" target="_blank">Live Site</a>
                <a className="btn btn-color2 me-2" href="https://github.com/Ibrahim75754/tourism-website-client" target="_blank">Client Code</a>
                <a className="btn btn-color2" href="https://github.com/Ibrahim75754/tourism-website-server" target="_blank">Server Code</a>
            </div>
            <div className="gallery container">
                <h5 className="mt-5 mb-3">Gallery :</h5>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project2} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project21} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project22} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project23} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TavelBD;