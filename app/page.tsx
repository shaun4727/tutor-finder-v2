import FeatureSection from '@/components/local-components/home-page/feature-section';
import HeroSection from '@/components/local-components/home-page/hero-section';
import FooterSection from '@/components/local-components/shared-components/footer-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';

export default function Home() {
    return (
        <div className="min-h-screen  ">
            <NavbarPage />
            <HeroSection />
            <FeatureSection />
            <FooterSection />
        </div>
    );
}
