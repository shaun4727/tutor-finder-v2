'use client';

import PriceRangeSlider from '@/components/custom-ui/price-range-slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
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
                                <div className="no-scrollbar overflow-y-auto px-4">
                                    <h1 className="text-xl font-bold">Subjects</h1>
                                    <FieldGroup className="">
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">Mathematics</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">Physics</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">Chemistry</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">Biology</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">English</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">History</Label>
                                        </Field>
                                        <Field orientation="horizontal">
                                            <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                            <Label htmlFor="terms-checkbox">Computer Science</Label>
                                        </Field>
                                    </FieldGroup>
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
