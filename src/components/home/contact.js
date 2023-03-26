import React from 'react';

const AppContact = () => {
    return (
        <div className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}


export default AppContact;