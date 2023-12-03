async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}
import React from 'react';

const AllProject = async () => {
    const data = await getData();
    const slicedData = data.slice(0, 6);

    return (
        <div className='Project-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Project-text'>
                            <h5>All Project</h5>
                            <h3>Better Agency/SEO Solution At<br/> Your Fingertips</h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        slicedData.map((item, i) => {
                            return (
                                <div key={i} className='col-6 mb-5'>
                                    <div className='Project-box'>
                                        <a target="_blank" href={item['live']}>
                                            <img  alt="" src={item['image']} />
                                        </a>
                                        <h3>{item['title'] }</h3>
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

export default AllProject;