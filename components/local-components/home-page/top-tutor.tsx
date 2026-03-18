'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const TopTutor = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    const nextSlide = () => {
        if (currentIndex === 4) return;
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prev) => prev - 1);
    };

    return (
        <div className="px-4 md:px-36 font-inter my-16 md:flex md:items-center gap-8">
            <div className="md:w-1/2 flex flex-col gap-6 md:items-start md:py-40">
                <div>
                    <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <Star className="fill-amber-400 stroke-amber-400" key={i} />
                        ))}
                    </div>
                    <h1 className="text-[3rem] font-bold font-montserrat">Top Tutors</h1>
                </div>
                <div>
                    <p>More than one million students gave a</p>
                    <p className="font-bold">5 start review to their tutor</p>
                </div>

                <div>
                    <div className="hidden md:flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="rounded-full"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="rounded-full"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:flex-1 md:w-1/2">
                <div className="md:hidden flex gap-2 space-x-2 overflow-x-auto">
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        const isOdd = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`p-4 rounded-2xl ${isOdd ? 'bg-[#03a9f430]' : 'bg-[#ffeaab]'} w-3/4 shrink-0`}
                            >
                                <div className="flex gap-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop"
                                        alt="image"
                                        width="300"
                                        height="300"
                                        className="w-12 rounded-[50%]"
                                    />
                                    <div className="font-inter text-sm font-bold">
                                        <h1>Azizul Hakim</h1>
                                        <span>Mathematics Tutor</span>
                                    </div>
                                </div>
                                <p className="font-bold mt-8">
                                    He is a great tutor. My son(14) already learned a lot in one
                                    session already.
                                </p>
                                <div className="mt-8 bg-white flex gap-4 items-center p-2 rounded-2xl w-3/4 scrollbar-hide">
                                    <span>Hardee</span>
                                    <div className="flex gap-1">
                                        <Star
                                            className="fill-amber-400 stroke-amber-400"
                                            size={12}
                                        />
                                        <Star
                                            className="fill-amber-400 stroke-amber-400"
                                            size={12}
                                        />
                                        <Star
                                            className="fill-amber-400 stroke-amber-400"
                                            size={12}
                                        />
                                        <Star
                                            className="fill-amber-400 stroke-amber-400"
                                            size={12}
                                        />
                                        <Star
                                            className="fill-amber-400 stroke-amber-400"
                                            size={12}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8 md:mt-0 overflow-hidden">
                    <div className="hidden md:flex relative gap-4">
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            const isOdd = index % 2 !== 0;

                            return (
                                <TutorCard
                                    isOdd={isOdd}
                                    key={index}
                                    index={index}
                                    currentIndex={currentIndex}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTutor;

const TutorCard = ({
    isOdd,
    index,
    currentIndex,
}: {
    isOdd: boolean;
    index: number;
    currentIndex: number;
}) => {
    const isStacked = index < currentIndex;

    return (
        //className={`p-4 rounded-2xl ${isOdd ? 'bg-[#03a9f430]' : 'bg-[#ffeaab]'} w-1/4 shrink-0`}
        <div
            className={`p-4 rounded-2xl  ${isOdd ? 'bg-[#b3dff2]' : 'bg-[#ffeaab]'} 
      shrink-0 transition-all duration-500 ease-in-out border border-white/20 h-120 flex flex-col justify-between w-3/4`}
            style={{
                // This logic calculates the distance needed to reach the start of the container
                // If index is 1 and it's active, it moves left by 100% to cover index 0.
                transform: isStacked
                    ? `translateX(-${index * 100}%)`
                    : `translateX(-${currentIndex * 100}%)`,

                // Increases z-index so the new ones always slide 'over' the old ones
                zIndex: index,

                // Optional: Add a slight scale or opacity shift to the cards underneath
                opacity: index < currentIndex - 1 ? 0 : 1,
                // scale: index < currentIndex ? 0.95 : 1,
            }}
        >
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop"
                    alt="image"
                    width="300"
                    height="300"
                    className="w-24 rounded-[50%]"
                />
                <div className="font-inter text-xl font-bold">
                    <h1>Azizul Hakim</h1>
                    <span>Mathematics Tutor</span>
                </div>
            </div>
            <p className="font-bold text-[2rem] mt-8">
                He is a great tutor. My son(14) already learned a lot in one session already.
            </p>
            <div className="mt-8 bg-white flex gap-4 items-center p-2 rounded-2xl w-3/4 scrollbar-hide">
                <span>Hardee</span>
                <div className="flex gap-1">
                    <Star className="fill-amber-400 stroke-amber-400" size={12} />
                    <Star className="fill-amber-400 stroke-amber-400" size={12} />
                    <Star className="fill-amber-400 stroke-amber-400" size={12} />
                    <Star className="fill-amber-400 stroke-amber-400" size={12} />
                    <Star className="fill-amber-400 stroke-amber-400" size={12} />
                </div>
            </div>
        </div>
    );
};
