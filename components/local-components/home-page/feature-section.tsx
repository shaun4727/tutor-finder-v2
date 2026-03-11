import { Calendar, Shield, Users } from 'lucide-react';

const FeatureSection = () => {
    return (
        <div className="px-4 md:px-36 py-16 flex flex-col gap-16 md:flex-row md:justify-between">
            <div className="flex flex-col justify-center items-center py-4 px-8">
                <Shield className="text-theme-blue" size={48} />
                <h1 className="font-montserrat text-[2rem] font-bold text-center">
                    Verified Tutors
                </h1>
                <p className="font-inter text[1.5rem] text-center mt-4">
                    All Tutors are background checked and verified for safety
                </p>
            </div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
                <Users className="text-[#00c249]" size={48} />
                <h1 className="font-montserrat text-[2rem]/8 font-bold text-center mt-4">
                    Affordable Learning
                </h1>
                <p className="font-inter text[1.5rem] text-center mt-4">
                    Find quality education at prices that fit your budget
                </p>
            </div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
                <Calendar className="text-[#ffa015]" size={48} />
                <h1 className="font-montserrat text-[2rem]/8 font-bold text-center mt-4">
                    Flexible Scheduling
                </h1>
                <p className="font-inter text[1.5rem] text-center mt-4">
                    Book sessions that work with your schedule, anytime
                </p>
            </div>
        </div>
    );
};

export default FeatureSection;
