import AllProject from '@/components/AllProject';
import Breadcrumb from '@/components/Breadcrumb';
import Subscribe from '@/components/Subscribe';
import React from 'react';

const page = () => {
    return (
        <div>
             <Breadcrumb
                currentPage="All Project"
                homeLink="/"
                homeLabel="Home"
                currentLink={"/projects"}
                currentLabel={"All Project"}
            />
            <AllProject />
            <Subscribe/>
        </div>
    );
};

export default page;