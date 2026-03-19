'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import TutorFilterMoblie from './components/tutor-sidebar';
import TutorCard from './tutor-card';

const TutorPage = () => {
    const [rangeValues, setRangeValues] = useState({ min: 0, max: 0 });

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
                        <TutorFilterMoblie className="md:hidden" />
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
