async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/StatList");
    if(!res.ok){
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}
import React from 'react';

const StatList = async () => {
    const data = await getData();
    return (
        <div className='StatList'>
            <div className='container'>
                <div className='row'>
                    <div className='stat-box col-3'>
                        <div className='stat-contane'>
                            <img className='' src='images/Group-3.svg'/>
                            <h3>{data['followers']}</h3>
                            <p>Followers</p>
                        </div>
                    </div>
                    <div className='stat-box col-3'>
                        <div className='stat-contane'>
                            <img className='' src='images/Like.svg'/>
                            <h3>{data['solved']}</h3>
                            <p>Solved Problems</p>
                        </div>
                    </div>
                    <div className='stat-box col-3'>
                        <div className='stat-contane'>
                            <img className='' src='images/Happy.svg'/>
                            <h3>{data['followers']}</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className='stat-box col-3'>
                        <div className='stat-contane'>
                            <img className='' src='images/Scan.svg'/>
                            <h3>{data['projects']}</h3>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatList;