

import CompanyLogo from '@/components/CompanyLogo';
import ExploreNew from '@/components/ExploreNew';
import FeaturedProduct from '@/components/FeaturedProduct';
import Hero from '@/components/Hero';
import OurProduct from '@/components/OurProduct';
import TopCatogery from '@/components/TopCatogery';
import React from 'react'


export default function Home() {



  return (
    <div>
      <Hero/>
      <CompanyLogo/>
      <FeaturedProduct/>
      <TopCatogery/>
      <ExploreNew/>
      <OurProduct/>
      
    </div>
  );
}
