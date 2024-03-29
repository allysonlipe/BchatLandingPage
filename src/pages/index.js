import React from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Faq from 'sections/faq';
import Testimonials from 'sections/testimonials';
import Security from 'sections/security';
import Addons from 'sections/addons';
// import MobileApp from 'sections/mobile-app';
import Dashboard from 'sections/dashboard';
// import UltimateFeatures from 'sections/ultimate-features';

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Bchat IA"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
      <Banner />
      <Testimonials />
      <Dashboard />
      <Addons />
      <Security />
      {/* <UltimateFeatures /> */}
      {/* <MobileApp /> */}
      <Faq />
    </Layout>
  );
}
