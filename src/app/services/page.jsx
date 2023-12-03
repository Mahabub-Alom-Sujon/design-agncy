
import AllService from '@/components/AllService';
import Breadcrumb from '@/components/Breadcrumb';
import Subscribe from '@/components/Subscribe';
import React from 'react';


const page = () => {
    return (
        <div>
            <Breadcrumb
                currentPage="Our Services"
                homeLink="/"
                homeLabel="Home"
                currentLink={"/services"}
                currentLabel={"Our Services"}
            />
            <AllService/>
            <Subscribe/>
        </div>
    );
};

export default page;