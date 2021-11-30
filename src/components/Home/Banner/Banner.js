import React from 'react';
import photo from '../../../img/photo1.png';
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div className="container box-shadow" style={{ backgroundColor: "#202428" }}>
            <div className="row p-5">
                <div className="col-md-6 my-5">
                    <h3>Hello! I'm</h3>
                    <h1 className="name">Md. Ibrahim Hossain</h1>
                    <h3 className="mb-5">
                        <Typewriter
                            options={{
                                strings: ['Web Designer', 'Front-end Developer', 'React Js Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <button className="btn btn-color">Hire Me</button>
                </div>
                <div className="col-md-6 text-center">
                    <img className="img-fluid img-size" src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;