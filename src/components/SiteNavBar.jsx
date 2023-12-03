import Link from 'next/link';
import React from 'react';

const SiteNavBar = () => {
    return (
        <>
            <nav id="sticky-menu" className="top-menu navbar navbar-expand-lg py-0 position-fixed">
                <div className="container">
                    <div className='menu-lago'>
                        <span>Design</span>
                        <span>AGENCY</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link className='nav-link' href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' href={'/team'}>Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' href={'/services'}>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' href={'/projects'}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' href={'/testimonials'}>Testimonials</Link>
                            </li>
                            <li className='nav-item'>
                                <button className='menu-btn-1 btn'>Login</button>
                            </li>
                            <li className='nav-item'>
                                <button className='menu-btn-2 btn'>Register</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SiteNavBar;