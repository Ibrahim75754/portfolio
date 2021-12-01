import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../../img/project1.JPG'
import project2 from '../../../img/project2.JPG'
import project3 from '../../../img/project3.JPG'

const Projects = () => {
    return (
        <div id="projects" className="mt-5 container">
            <h2 className="text-center mb-5 primary-color">My Recent Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card box-shadow" style={{ backgroundColor: "#202428" }}>
                        <img src={project1} class="card-img-top p-2" alt="..." />
                        <div class="card-body">
                            <h4 className="mb-3">Shaven</h4>
                            <div className="row">
                                <div className="col">
                                    <Link className="btn btn-color" to="/shavenDetails">Details</Link>
                                </div>
                                <div className="col text-end">
                                    <a href="https://shaving-foam.web.app/" target="_blank"><i class="fas fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card box-shadow" style={{ backgroundColor: "#202428" }}>
                        <img src={project2} class="card-img-top p-2" alt="..." />
                        <div class="card-body">
                            <h4 className="mb-3">TravelBD</h4>
                            <div className="row">
                                <div className="col">
                                    <Link className="btn btn-color" to="/travelBD">Details</Link>
                                </div>
                                <div className="col text-end">
                                    <a href="https://travel-1d0b6.web.app/" target="_blank"><i class="fas fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card box-shadow" style={{ backgroundColor: "#202428" }}>
                        <img src={project3} class="card-img-top p-2" alt="..." />
                        <div class="card-body">
                            <h4 className="mb-3">PureSmile</h4>
                            <div className="row">
                                <div className="col">
                                    <Link className="btn btn-color" to="/pureSmile">Details</Link>
                                </div>
                                <div className="col text-end">
                                    <a href="https://healthcare-3e21b.web.app/" target="_blank"><i class="fas fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;