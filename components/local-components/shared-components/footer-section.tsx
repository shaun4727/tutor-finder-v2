import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className="bg-theme-color px-4 md:px-36 py-16 ">
            <div className="flex flex-col md:flex-row gap-8 md:justify-between">
                <div>
                    <div className="flex gap-4">
                        <Image
                            src={`/images/logo-white.svg`}
                            width="200"
                            height="200"
                            alt="logo"
                            className="w-8"
                        />
                        <h1 className="text-white text-[2rem] font-bold font-montserrat">
                            Tutor <span className="text-theme-blue">Finder</span>
                        </h1>
                    </div>
                    <p className="text-white/60 font-inter">
                        Connecting students with expert tutors for personalized learning
                        experiences.
                    </p>
                </div>
                <div className="font-inter text-white/70">
                    <h1 className="text-white text-[1.5rem] font-montserrat font-bold">
                        For Students
                    </h1>
                    <p className=" ">Find Tutors</p>
                    <p>How it works</p>
                    <p>About Us</p>
                </div>
                <div className="font-inter text-white/70">
                    <h1 className="text-white text-[1.5rem] font-montserrat font-bold">
                        For Tutors
                    </h1>
                    <p>Become a tutor</p>
                    <p>Teaching guidelines</p>
                </div>
                <div className="font-inter text-white/70">
                    <h1 className="text-white text-[1.5rem] font-montserrat font-bold">Support</h1>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="">
                <hr className="text-white/70 mt-8 mb-4" />
                <p className="text-white font-inter">@ 2024 Tutor Finder. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default FooterSection;
