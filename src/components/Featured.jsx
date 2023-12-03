async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProject Calling Fail");
    }
    return res.json();
}
import React from 'react';

const Featured = async () => {
    const data = await getData();
    return (
        <div className='Featured-Project'>
            <div className='container'>
                <div className='row gx-0 justify-content-center '>

                    <div className='col-12'>
                        <div className='Featured-tittle'>
                            <h3>Featured Project</h3>
                            <p>We provide the Perfect Solution to your business growth</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='Featured-left'>
                            <a target="_blank" href={data[0]['live']}>
                                <img src={data[0]['image']} />
                            </a>
                            <p>App Design - June 20, 2022</p>
                            <h5>App Redesign</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='Featured-right'>
                            <a target="_blank" href={data[1]['live']}>
                                <img src={data[1]['image']} />
                            </a>
                            <p>App Design - June 20, 2022</p>
                            <h5>Redesign channel website landng page</h5>
                        </div>
                        <div className='Featured-bottom'>
                            <a target="_blank" href={data[2]['live']}>
                                <img src={data[2]['image']} />
                            </a>
                            <p>App Design - June 20, 2022</p>
                            <h5>Redesign channel website landng page</h5>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='Featured-right'>
                            <a target="_blank" href={data[3]['live']}>
                                <img src={data[3]['image']} />
                            </a>
                            <p>App Design - June 20, 2022</p>
                            <h5>Redesign channel website landng page</h5>
                        </div>
                        <div className='Featured-bottom'>
                            <a target="_blank" href={data[4]['live']}>
                                <img src={data[4]['image']} />
                            </a>
                            <p>App Design - June 20, 2022</p>
                            <h5>Redesign channel website landng page</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;