import AboutUs from '@/components/local-components/about-us/about-us';
import FooterSection from '@/components/local-components/shared-components/footer-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';

const page = () => {
    return (
        <div>
            <NavbarPage />
            <AboutUs />
            <FooterSection />
        </div>
    );
};

export default page;
