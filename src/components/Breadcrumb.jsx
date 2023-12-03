// Breadcrumb.js
import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = ({ currentPage, homeLink, homeLabel,currentLink,currentLabel }) => {
    return (
        <div className='breadcrumb-bg'>
            <div className='breadcrumb-bg-2'></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className='breadcrumb-top' aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                            </ol>
                        </nav>

                        <nav className='breadcrumb-bottom' aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link href={homeLink}>{homeLabel}</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    <span><AiOutlineRight /></span>
                                    <Link href={currentLink}>{currentLabel}</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
