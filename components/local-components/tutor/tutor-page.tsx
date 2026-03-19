'use client';

import PriceRangeSlider from '@/components/custom-ui/price-range-slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ChevronDown, Search, SlidersHorizontal, Star } from 'lucide-react';
import { useState } from 'react';
import TutorCard from './tutor-card';

const TutorPage = () => {
    const [rangeValues, setRangeValues] = useState({ min: 0, max: 0 });

    const rangeHandler = (value: { min: number; max: number }) => {
        console.log(value);
    };

    return (
        <div className="bg-[#f4f4f4] px-4 py-8">
            <Card className="w-full">
                <CardContent>
                    <div className="relative">
                        <Input
                            id="search"
                            type="text"
                            placeholder="Find Tutor by subject, grade or tutor name"
                            className="mb-2 placeholder:font-inter placeholder:text-xs"
                            required
                        />
                        <Search className="absolute top-2 right-2 size-4" />
                    </div>

                    <div className="flex justify-between">
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

                                    <div>
                                        <h1>Rating</h1>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>
                                    <PriceRangeSlider
                                        min={200}
                                        max={1000}
                                        onChange={rangeHandler}
                                    />
                                </div>
                            </DrawerContent>
                        </Drawer>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="font-montserrat px-4 py-2">
                                    {' '}
                                    <ChevronDown /> Most Relevant{' '}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem disabled>API</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardContent>
            </Card>

            {[1, 2, 3, 4, 5].map((tutor) => (
                <TutorCard key={tutor} />
            ))}
        </div>
    );
};

export default TutorPage;
