import {
    Brain,
    GraduationCap,
    HandFist,
    Laptop,
    LoaderPinwheel,
    SquareAsterisk,
    TabletSmartphone,
    Vault,
} from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="px-4 py-8 md:px-36">
            <div className="font-inter bg-[#ffece459] rounded-lg">
                <div className="relative flex flex-col items-center w-fit mx-auto">
                    <h1 className="text-[2rem] font-bold font-montserrat text-center">
                        Our Mission
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1418 125"
                        className="w-full h-auto"
                    >
                        <path
                            d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                            fill="#ff6c2c"
                        ></path>
                    </svg>
                </div>
                <p className="text-center p-4">
                    Our mission is to connect students with dedicated tutors who provide
                    personalized, in-home learning experiences. By bringing quality education
                    directly to students homes, we aim to enhance their talents, strengthen their
                    academic skills, and build their confidence. Our platform ensures that each
                    student receives the guidance they need to excel, fostering a supportive
                    environment that empowers them to reach their full potential.
                </p>
            </div>
            <div className="mt-8 font-inter">
                <h1 className="font-montserrat text-[2rem] font-bold">
                    Future Plans for Our Tutoring Platform
                </h1>
                <div className="md:flex md:justify-between mt-6">
                    <div className="md:w-1/2 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <Vault className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Expanding Subject Offerings
                            </h1>
                            <p>
                                We plan to introduce a wider range of subjects, including
                                specialized courses like coding, music, arts, and competitive exam
                                preparation, ensuring students get access to diverse learning
                                opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <SquareAsterisk className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Global Reach & Multilingual Support
                            </h1>
                            <p>
                                Currently serving local students, we aim to expand internationally,
                                allowing students worldwide to connect with expert tutors. We also
                                plan to add multilingual support to cater to students from different
                                linguistic backgrounds.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between mt-6">
                    <div className="md:w-1/2 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <Laptop className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Online & Hybrid Learning Options
                            </h1>
                            <p>
                                In addition to in-home tutoring, we will introduce online and hybrid
                                learning models, offering flexible options for students who prefer
                                virtual lessons or a mix of online and in-person teaching.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <Brain className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                AI-Powered Tutor Matching
                            </h1>
                            <p>
                                To enhance the student-tutor matching process, we will implement
                                AI-driven recommendations, ensuring students are paired with tutors
                                based on learning styles, preferences, and academic goals.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between mt-6">
                    <div className="md:w-1/2 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <LoaderPinwheel className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Progress Tracking & Personalized Learning Plans
                            </h1>
                            <p>
                                We plan to integrate a student progress tracking system, where
                                parents and students can monitor improvements, set learning goals,
                                and receive personalized study plans.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <TabletSmartphone className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Mobile App for Easy Access
                            </h1>
                            <p>
                                A dedicated mobile app will be developed, making it easier for
                                students and tutors to schedule sessions, track progress, and
                                communicate seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between mt-6">
                    <div className="md:w-1/2 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <HandFist className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Community & Mentorship Programs
                            </h1>
                            <p>
                                We will launch a student-tutor community, where students can engage
                                in group discussions, mentorship programs, and peer learning to
                                further boost confidence and skills.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-start gap-4 rounded-lg pr-4 ">
                        <span className="1/4 pt-1.5">
                            <GraduationCap className="text-[#33415c]" />
                        </span>
                        <div className="3/4 ">
                            <h1 className="text-[1.5rem] font-bold font-montserrat text-[#33415c]">
                                Affordable Learning for All
                            </h1>
                            <p>
                                We aim to introduce scholarship programs and financial aid, ensuring
                                that every student, regardless of financial background, has access
                                to quality education. By implementing these future plans, we are
                                committed to making learning more accessible, effective, and
                                empowering for students worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
