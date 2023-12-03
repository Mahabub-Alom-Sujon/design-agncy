import Breadcrumb from '@/components/Breadcrumb';
import Subscribe from '@/components/Subscribe';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const page = () => {
    return (
        <div>
            <Breadcrumb
                currentPage="Testimonial List"
                homeLink="/"
                homeLabel="Home"
                currentLink={"/testimonials"}
                currentLabel={"Testimonial List"}
            />
            <Testimonial />
            <Subscribe/>
        </div>
    );
};

export default page;