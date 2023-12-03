async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("WorkList List Calling Fail");
    }
    return res.json();
}
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const WorkList = async () => {
    
    const data = await getData();
    return (
        <div>
            <div className='worklist'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h6>Work List</h6>
                            <h4>We provide the Perfect Solution to your business growth</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='work-box'>
                                <div className='icon'>
                                    <img src='images/Activity.svg'/>
                                </div>
                                <div className='tittle'>
                                    <h5>{data[0]['title']}</h5>
                                    <p>{data[0]['des']}</p>
                                    <button className='btn '>Learn More <span className='ms-2'><FaArrowRight/></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='work-box'>
                                <div className='icon'>
                                    <img src='images/Heart.svg'/>
                                </div>
                                <div className='tittle'>
                                    <h5>{data[0]['title']}</h5>
                                    <p>{data[0]['des']}</p>
                                    <button className='btn '>Learn More <span className='ms-2'><FaArrowRight/></span></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='work-box'>
                                <div className='icon'>
                                    <img src='images/Work.svg'/>
                                </div>
                                <div className='tittle'>
                                    <h5>{data[0]['title']}</h5>
                                    <p>{data[0]['des']}</p>
                                    <button className='btn '>Learn More <span className='ms-2'><FaArrowRight/></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;