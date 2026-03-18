import ContactSection from '@/components/local-components/home-page/contact-section';
import FeatureSection from '@/components/local-components/home-page/feature-section';
import HeroSection from '@/components/local-components/home-page/hero-section';
import SolveStruggle from '@/components/local-components/home-page/solve-struggle';
import TopTutor from '@/components/local-components/home-page/top-tutor';
import FooterSection from '@/components/local-components/shared-components/footer-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';

export default function Home() {
    return (
        <div className="min-h-screen  ">
            <NavbarPage />
            <HeroSection />
            <FeatureSection />
            <SolveStruggle />
            <TopTutor />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
