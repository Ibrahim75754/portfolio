import React from 'react';
import Header from '../Shared/Header/Header';
import project1 from '../../img/project1.JPG'
import project11 from '../../img/project11.JPG'
import project12 from '../../img/project12.JPG'
import project13 from '../../img/project13.JPG'
import Footer from '../Shared/Footer/Footer';


const ShavenDetails = () => {
    return (
        <div className="">
            <Header></Header>
            <h3 className="primary-color text-center">Shaven Project Details</h3>
            <div className="container">
                <h5 className="mt-2">Features :</h5>
                <ul className="p-color">
                    <li>This is a niche website where users can order shaving foam when logged in.</li>
                    <li>Users also view their orders on the Dashboard page.</li>
                    <li> It has a customized admin panel. An admin can insert, update and delete products and do others operations.
                    </li>
                    <li>Easy to use & simple user interface.</li>
                </ul>
                <a className="btn btn-color2 me-2 mb-2" href="https://shaving-foam.web.app/" target="_blank">Live Site</a>
                <a className="btn btn-color2 me-2" href="https://github.com/Ibrahim75754/niche-website-client" target="_blank">Client Code</a>
                <a className="btn btn-color2" href="https://github.com/Ibrahim75754/niche-website-server" target="_blank">Server Code</a>
            </div>
            <div className="gallery container">
                <h5 className="mt-5 mb-3">Gallery :</h5>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project1} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project11} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project12} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card box-shadow">
                            <img src={project13} className="img-fluid box-shadow" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShavenDetails;