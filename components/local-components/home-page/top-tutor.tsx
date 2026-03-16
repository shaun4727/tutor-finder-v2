import { Star } from 'lucide-react';

const TopTutor = () => {
    return (
        <div className="px-4 font-inter">
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
        </div>
    );
};

export default TopTutor;
