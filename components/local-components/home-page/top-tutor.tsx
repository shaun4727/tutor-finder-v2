'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const TopTutor = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, 5 - itemsPerView + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) =>
                (prev - 1 + Math.max(1, 5 - itemsPerView + 1)) % Math.max(1, 5 - itemsPerView + 1)
        );
    };

    return (
        <div className="px-4 md:px-36 font-inter my-16">
            <div className="flex gap-2">
                <Star className="fill-amber-400 stroke-amber-400" />
                <Star className="fill-amber-400 stroke-amber-400" />
                <Star className="fill-amber-400 stroke-amber-400" />
                <Star className="fill-amber-400 stroke-amber-400" />
                <Star className="fill-amber-400 stroke-amber-400" />
            </div>
            <h1 className="text-[2.2rem] font-bold font-montserrat">Top Tutors</h1>
            <p>More than one million students gave a</p>
            <p className="font-bold">5 start review to their tutor</p>

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

            <div className="mt-8">
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
                <div className="hidden md:block">
                    <div
                        className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            const isOdd = index % 2 !== 0;

                            return (
                                <div
                                    key={index}
                                    className={`p-4 rounded-2xl ${isOdd ? 'bg-[#03a9f430]' : 'bg-[#ffeaab]'} w-1/4 shrink-0`}
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
                </div>
            </div>
        </div>
    );
};

export default TopTutor;
