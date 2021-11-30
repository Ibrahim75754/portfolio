import React from 'react';

const ContactMe = () => {
    return (
        <div className="mt-5">
            <div className="box-shadow container p-5">
                <h2 className="text-center mb-3" style={{ color: "#c01717" }}>Get In Tuch</h2>
                <div className="">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="text" required />
                        </div>

                        <button type="submit" class="btn btn-color">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;