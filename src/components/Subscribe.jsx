import React from 'react';

const Subscribe = () => {
    return (
        <div className='Subscribe'>
            <div className='container'>
                <div className='row'>
                    <div className='12 d-flex justify-content-center'>
                        <div className='Subscribe-box'>
                            <h5>SUBSCRIBE</h5>
                            <h3>Subscribe to get the latest news about us</h3>
                            <p>Please drop your email below to get daily update about what we do</p>
                            <form>
                                <div class="Subscribe-contact">
                                    <input type="email" class="form-control" placeholder='Enter Your Email Adress' />
                                </div>
                                <button type="submit" class="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;