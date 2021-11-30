import React from 'react';
import photo from '../../../img/skill.png';

const MySkill = () => {
    return (
        <div id="skills" className="container box-shadow mt-5 p-5" style={{ backgroundColor: "#202428" }}>
            <h2 className="text-center" style={{ color: "#c01717" }}>My Skills</h2>
            <p className="p-color text-center">I have 2 years of good experience and have a clear idea of HTML5, CSS3, JAVASCRIPT, React Js. In the web design part, I have the skills to design any kind of website. My design must be responsive in all devices, pixel perfect, w3c valid code, clean coding, SEO friendly, and cross-browser compatible.</p>
            <div className="row">
                <div className="col-md-6">
                    <img className="" src={photo} alt="" />
                </div>
                <div className="col-md-6 mt-5">



                </div>
            </div>
        </div>
    );
};

export default MySkill;