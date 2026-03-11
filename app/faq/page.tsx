import FaqComponent from '@/components/local-components/faq/faq-components';
import FooterSection from '@/components/local-components/shared-components/footer-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';

const page = () => {
    return (
        <div>
            <NavbarPage />
            <FaqComponent />
            <FooterSection />
        </div>
    );
};

export default page;
