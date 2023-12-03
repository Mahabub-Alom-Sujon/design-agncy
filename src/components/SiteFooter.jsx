async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/SocialLink");
    if(!res.ok){
        throw new Error("SocialLink List Calling Fail");
    }
    return res.json();
}
import Link from 'next/link';
import React from 'react';

const SiteFooter = async () => {
    const data = await getData();
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='row gx-0'>
                    <div className='col-5'>
                        <div className='Footer-left'>
                            <h3>WEB LOGO</h3>
                            <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                            <div className='social-link'>
                                <a target="_blank" href={data[0]['link']}>
                                    <img src='images/facebook.svg' />
                                </a>
                                <a target="_blank" href={data[1]['link']}>
                                    <img src='images/twitter.svg' />
                                </a>
                                <a target="_blank" href={data[2]['link']}>
                                    <img src='images/linkedin.svg' />
                                </a>
                                <a target="_blank" href={data[2]['link']}>
                                    <img src='images/facebook.svg' />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-4'>
                        <div className='Footer-menu'>
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link href={"/"}>Services</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Portfolio</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>About Us</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='Footer-right'>
                            <h4>Address</h4>
                            <p>Design Agency Head Office.
                            Airport Road
                            United Arab Emirate</p>
                        </div>
                        
                    </div>
                    <div className='col-12'>
                        <div className='Footer-bottom'>
                            <p>Copyright Design Agency 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteFooter;