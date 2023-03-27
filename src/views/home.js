import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppContact from '../components/home/contact';
import AppFaq from '../components/home/faq';
import AppWorks from '../components/home/works';
import AppPricing from '../components/home/pricing';

const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppPricing />
            <AppFaq />
            <AppContact />
        </div>
    );
}

export default AppHome;