import React from 'react';
import photo from '../../../img/photo1.png';
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div className="container box-shadow" style={{ backgroundColor: "#202428" }}>
            <div className="row p-5">
                <div className="col-md-6 my-5">
                    <h3>Hello! <span className="primary-color">I'm</span></h3>
                    <h1 className="">Md.Ibrahim Hossain</h1>
                    <h3 className="mb-5">
                        <Typewriter
                            options={{
                                strings: ['Web Designer', 'Front-end Developer', 'React Js Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <a className="btn btn-color mt-3" href="https://drive.google.com/file/d/1oV0I0KRrOtN16qMhA3f-U5RxnGg1SJk4/view?usp=sharing" target="_blank">Download Resume</a>
                </div>
                <div className="col-md-6 text-center">
                    <img className="img-fluid img-size" src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;