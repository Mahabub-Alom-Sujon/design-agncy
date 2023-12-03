async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}
import React from 'react';

const Testimonial = async () => {
    const data = await getData();
    return (
        <div className='Testimonial-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Testimonial-text'>
                            <h5>Testimonial List</h5>
                            <h3>Better Agency/SEO Solution At<br/> Your Fingertips</h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        data.map((item,i)=>{
                            return(
                                <div key={i} className='col-4 mb-5'>
                                    <div className='Testimonial-box'>
                                        <img alt='' src={item['image']} />
                                        <p>{item['msg']}</p>
                                        <h3>{item['name']}</h3>
                                        <h5>{item['designation'] }</h5>
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

export default Testimonial;