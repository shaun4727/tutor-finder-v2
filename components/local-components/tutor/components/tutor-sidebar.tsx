import PriceRangeSlider from '@/components/custom-ui/price-range-slider';
import RatingComponent from '@/components/custom-ui/rating-component/rating-component';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';

const TutorFilterMoblie = ({ className = '' }: { className: string }) => {
    const rangeHandler = (value: { min: number; max: number }) => {
        console.log(value);
    };

    return (
        <div className={`${className}`}>
            <Drawer direction="bottom">
                <DrawerTrigger asChild>
                    <Button variant="outline" className="font-montserrat px-4 py-2">
                        {' '}
                        <SlidersHorizontal /> Filter{' '}
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-full">
                    <DrawerHeader>
                        <DrawerTitle>Filter Area</DrawerTitle>
                    </DrawerHeader>
                    <div className="no-scrollbar overflow-y-auto px-4 font-inter">
                        <div className="mb-4">
                            <h1 className="p-1">Subject</h1>
                            <Select>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select a Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Subject</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <h1 className="p-1">Class</h1>
                            <Select>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select a Class" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Class</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="mb-4">
                            <h1 className="p-1">Rating</h1>
                            <RatingComponent className="p-1" />
                        </div>
                        <div className="mb-4">
                            <h1 className="p-1">Hourly Rate(BDT)</h1>
                            <PriceRangeSlider min={200} max={1000} onChange={rangeHandler} />
                        </div>
                        <div className="mb-4">
                            <h1 className="p-1">Location</h1>
                            <Select>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select a Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Location</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button variant={'outline'} className="bg-theme-blue text-white p-4">
                            Apply Filter
                        </Button>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default TutorFilterMoblie;
