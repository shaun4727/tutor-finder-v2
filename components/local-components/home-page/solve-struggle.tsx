import { Button } from '@/components/ui/button';
import { BookOpenText, UserRound } from 'lucide-react';

const SolveStruggle = () => {
    return (
        <div className="py-8 px-4 md:px-36">
            <h1 className="text-[2rem] md:text-[3rem]/14 font-bold font-montserrat text-center ">
                Solve Your Struggle
            </h1>
            <div className="md:flex md:gap-8 md:h-120 ">
                <div className="bg-[#03a9f430] p-8 rounded-2xl mt-8 md:flex md:flex-col md:justify-center md:gap-4 ">
                    <div className="font-inter flex gap-2 items-center    ">
                        <span className="border border-theme-blue inline-block rounded-sm p-2 bg-white">
                            <BookOpenText size={40} className="text-theme-blue" />
                        </span>
                        <h1 className="text-[1.2rem]/5 md:text-[1.4rem]/7 font-bold">
                            Connect with right Tutor and move forward
                        </h1>
                    </div>
                    <p className="mt-4 text-black/90 text-[1.2rem]/6 font-inter">
                        Find expert tutors who understand your learning goals and help you improve
                        with confidence all in just a few easy steps.
                    </p>
                    <Button
                        variant="default"
                        className="p-6 text-[.9rem] font-inter mt-2 bg-theme-blue md:w-1/3"
                    >
                        Request for a tutor
                    </Button>
                </div>
                <div className="bg-[#03a9f430] p-8 rounded-2xl mt-8 md:flex md:flex-col md:justify-center md:gap-4">
                    <div className="font-inter flex gap-2 items-center    ">
                        <span className="border border-theme-blue inline-block rounded-sm p-2 bg-white">
                            <UserRound size={40} className="text-theme-blue" />
                        </span>
                        <h1 className="text-[1.2rem]/5 md:text-[1.4rem]/7 font-bold">
                            Join as a tutor, find a tuition for you
                        </h1>
                    </div>
                    <p className="mt-4 text-black/90 text-[1.2rem]/6 font-inter">
                        Join as a tutor to find students who match your expertise and schedule.
                        Share your knowledge and grow your teaching journey.
                    </p>
                    <Button
                        variant="default"
                        className="p-6 text-[.9rem] font-inter mt-2 bg-theme-blue md:w-1/3"
                    >
                        Join as a Tutor
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SolveStruggle;
