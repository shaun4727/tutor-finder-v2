import FooterSection from '@/components/local-components/shared-components/footer-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';
import TutorPage from '@/components/local-components/tutor/tutor-page';

const page = () => {
    return (
        <div>
            <NavbarPage />
            <TutorPage />
            <FooterSection />
        </div>
    );
};

export default page;
