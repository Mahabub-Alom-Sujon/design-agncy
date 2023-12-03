import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import Partner from '@/components/Partner';
import SiteFooter from '@/components/SiteFooter';
import SiteNavBar from '@/components/SiteNavBar';
import StatList from '@/components/StatList';
import Subscribe from '@/components/Subscribe';
import WorkList from '@/components/WorkList';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <Partner />
      <WorkList/>
      <StatList />
      <Featured/>
      <Subscribe />
    </div>
  );
};

export default page;
