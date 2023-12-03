import Breadcrumb from '@/components/Breadcrumb';
import Subscribe from '@/components/Subscribe';
import Team from '@/components/Team';
import React from 'react';

const page = () => {
    return (
        <div>
            <Breadcrumb
                currentPage="Team"
                homeLink="/"
                homeLabel="Home"
                currentLink={"/team"}
                currentLabel={"Team"}
            />
            <Team/>
            <Subscribe/>
        </div>
    );
};

export default page;