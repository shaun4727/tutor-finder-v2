import Image from 'next/image';

const OurTeamSection = () => {
    return (
        <div className="font-inter py-16 ">
            <div>
                <h1 className="text-[2.2rem] font-montserrat font-extrabold text-center mb-6">
                    Our Team
                </h1>
                <div className="flex gap-4 bg-[#b3dff2]/40 p-8 rounded-2xl relative">
                    <div className="flex flex-col gap-4">
                        <Image
                            src={`/images/about-us/vicky.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                        <Image
                            src={`/images/about-us/craig.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col gap-4 pt-18">
                        <Image
                            src={`/images/about-us/craig.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                        <Image
                            src={`/images/about-us/linkedin.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div>
                        <Image
                            src={`/images/about-us/linkedin.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div className="pt-18">
                        <Image
                            src={`/images/about-us/vicky.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div>
                        <Image
                            src={`/images/about-us/craig.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div className="pt-18">
                        <Image
                            src={`/images/about-us/linkedin.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div>
                        <Image
                            src={`/images/about-us/vicky.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col gap-4 pt-18">
                        <Image
                            src={`/images/about-us/linkedin.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                        <Image
                            src={`/images/about-us/craig.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image
                            src={`/images/about-us/craig.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                        <Image
                            src={`/images/about-us/vicky.jpg`}
                            alt="team-member"
                            width="300"
                            height="300"
                            className="w-32 h-auto rounded-2xl"
                        />
                    </div>
                    <h1 className="absolute bottom-1/4 left-[43%] border border-black/60 p-3 rounded-2xl">
                        Our Community
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default OurTeamSection;
