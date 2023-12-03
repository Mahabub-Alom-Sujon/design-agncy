import React from 'react';
import Image from 'next/image'
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}
const Hero =async () => {
    const data = await getData();
    return (
        <div className='hero-bg d-flex align-items-center'>

           <div className='container'>
               <div className='row '>
                     <div className='col-6 position-relative'>
                        <div className='hero-tittle'>
                            <h1> {data['title']}</h1>
                           <p>{data['description']}</p>
                           <button className='btn'>Get Started</button>

                        </div>
                    </div>
                     <div className='col-6'>
                         <div className='hero-img'>
                            <Image
                                
                                src={data['image3']}
                                 width={408}
                                height={271}
                            
                            />
                            <Image
                                src={data['image4']}
                                 width={180}
                                 height={271}
                                 priority
                            />
                            
                             <Image
                                 src={data['image1']}
                               width={246}
                                height={164}
                            
                             />
                             <Image
                                 src={data['image2']}
                                width={345}
                                 height={164}
                            
                             />
                        </div>

                     </div>
                </div>
            </div>
                    
    
            

        </div>

    );
};

export default Hero;