import React from 'react';
import Header from '../Shared/Header/Header';
import project3 from '../../img/project3.JPG'
import project32 from '../../img/project32.JPG'
import Footer from '../Shared/Footer/Footer';


const PureSmile = () => {
    return (
        <div className="">
            <Header></Header>
            <h3 className="primary-color text-center">TravelBD Project Details</h3>
            <div className="container">
                <h5 className="mt-2">Features :</h5>
                <ul className="p-color">
                    <li>You can Easily book Appointment.</li>
                    <li>You can see our Our Doctor.</li>
                    <li>Easy to login or registration.</li>
                    <li>Easy to use & simple user interface.</li>
                </ul>
                <a className="btn btn-color2 me-2" href="https://healthcare-3e21b.web.app/" target="_blank">Live Site</a>
                <a className="btn btn-color2 me-2" href="https://github.com/Ibrahim75754/pureSmile" target="_blank">Client Code</a>
            </div>
            <div className="gallery container">
                <h5 className="mt-5 mb-3">Gallery :</h5>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project3} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project32} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PureSmile;