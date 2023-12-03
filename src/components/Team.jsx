async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}
import React from 'react';

const Team = async () => {
    const data = await getData();
    const slicedData = data.slice(0, 3);

    return (
        <div className='team-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='team-text'>
                            <h5>Our Team Member</h5>
                            <h3>Check our awesome team<br/> members</h3>
                        </div>
                    </div>
                </div>
                <div className='row gx-0'>
                    {
                        slicedData.map((item, i) => {
                            return (
                                <div className='col-4 text-center'>
                                    <div className='team-box'>
                                        <img src={item['image']} alt="/" />
                                        <h4>{item['name']}</h4>
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

export default Team;