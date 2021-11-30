import React from 'react';
import photo from '../../../img/photo2.png';


const AboutMe = () => {
    return (
        <div id="aboutMe" className="container box-shadow mt-5 p-5" style={{ backgroundColor: "#202428" }}>
            <h2 className="text-center" style={{ color: "#c01717" }}>About Me</h2>
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-6 text-center mb-3">
                        <img className="img-fluid custom-border p-2" src={photo} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3>Hi! I'm <span style={{ color: "#c01717" }}>Ibrahim Hossain</span></h3>
                        <p className="p-color">I am a professional Web Designer. I'm very passionate and dedicated to my work. With 2 years of experience as a professional Web Designer, I have acquired the skills and knowledge necessary to make your project a success. I’ve helped so many organizations improve their online presence and hope I can help you to make an awesome website for your business. I am passionate to learn more and get my skill sets more polished and learn new technologies. I love programming as It's my passion.</p>

                        <div className="row">
                            <div className="col-md-6">
                                <h6>Residence :  <span className="p-color">Bangladesh</span></h6>
                                <h6>City :  <span className="p-color">Dhaka</span></h6>
                                <a className="btn btn-color mt-3" href="https://drive.google.com/file/d/1oV0I0KRrOtN16qMhA3f-U5RxnGg1SJk4/view?usp=sharing" target="_blank">Download Resume</a>
                            </div>
                            <div className="col-md-6">
                                <h6>WhatsApp :  <span className="p-color">+8801568106918</span></h6>
                                <h6>Mail :  <span className="p-color">md.ibrahimhossain@gmail.com</span></h6>
                                <div className="mt-4">
                                    <a href="https://www.facebook.com/ih75754" target="_blank"><i class="fab fa-facebook-square me-3 p-2"></i></a>
                                    <a href="https://www.linkedin.com/in/md-ibrahim-hossain/" target="_blank"><i class="fab fa-linkedin me-3 p-2"></i></a>
                                    <a href="https://github.com/Ibrahim75754" target="_blank"><i class="fab fa-github p-2"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;