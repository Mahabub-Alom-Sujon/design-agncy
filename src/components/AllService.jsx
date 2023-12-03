async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}
import React from 'react';
import { Image } from 'react-bootstrap';


const AllService = async () => {
    const data = await getData();
    return (
        <div className='AllProject-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='AllProject-text'>
                            <h5>Our All Services</h5>
                            <h3>{data[0]["tag"] }</h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i.toString()} className='col-6 mb-5'>
                                    <div className='AllProject-box'>
                                        <h3>{item["title"] }</h3>
                                        <p>{item["des"] }</p>
                                    
                                        <div className='img-box'>
                                            <Image className='img-1'
                                                    src={item["image1"]}
                                                    width={370}
                                                    height={164}
                                                    priority
                                            />
                                            <Image className='img-2'
                                                    src={item["image2"]}
                                                    width={143}
                                                    height={164}
                                            />
                                            <Image className='img-3'
                                                   src={item["image3"]}
                                                    width={257}
                                                    height={263}
                                            />
                                            <Image className='img-4'
                                                    src={item["image4"]}
                                                    width={257}
                                                    height={263}
                                            />
            
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                             
                        })
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default AllService;