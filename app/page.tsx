import HeroSection from '@/components/local-components/home-page/hero-section';
import NavbarPage from '@/components/local-components/shared-components/navbar';

export default function Home() {
    return (
        <div className="min-h-screen  ">
            <NavbarPage />
            <HeroSection />
        </div>
    );
}
