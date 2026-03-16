import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="px-4 md:px-36 py-16 md:flex justify-between md:bg-[#f7faff]">
            <div className=" md:w-1/2">
                <h1 className="text-[3rem]/14 font-bold font-montserrat">
                    Best Platform to find Home and Online Tutors
                </h1>
                <p className="font-inter text-[1.5rem]/7 mt-6 text-black/70">
                    Students looking for tuition help or Tutors waiting to share his knowledge, you
                    have come to the right place.
                </p>
                <div className="bg-white p-8 mt-6 w-sm shadow-md rounded-lg text-center text-sm font-bold text-gray-800 dark:bg-[#101010] dark:text-gray-300">
                    <Tabs defaultValue="home">
                        <TabsList className="font-montserrat h-auto">
                            <TabsTrigger
                                value="home"
                                className="py-4 data-[state=active]:bg-theme-blue data-[state=active]:text-white transition-colors"
                            >
                                Online
                            </TabsTrigger>

                            <TabsTrigger value="settings" className="py-4" disabled>
                                In-Person
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Input
                        placeholder="Find Tutor by subject, grade or tutor name"
                        className="mt-3 font-inter text-base placeholder:font-inter placeholder:text-sm placeholder:text-gray-400 focus-visible:ring-0"
                    />
                    <Button className="w-full mt-1 py-4 bg-theme-blue font-montserrat cursor-pointer">
                        <Search /> Find My Perfect Tutor
                    </Button>
                </div>
            </div>
            <div className="md:w-1/2 mt-12">
                <Image
                    src={`/images/hero-illustration.png`}
                    width="1000"
                    height="1200"
                    alt="hero-image"
                />
            </div>
        </div>
    );
};

export default HeroSection;
