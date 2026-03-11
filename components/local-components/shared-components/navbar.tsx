'use client';

import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { TextAlignJustify } from 'lucide-react';
import Image from 'next/image';

const NavbarPage = () => {
    const mobile = useIsMobile();

    return (
        <div>
            {' '}
            {mobile ? (
                <div>
                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <Button className="rounded-none bg-theme-color">
                                <TextAlignJustify />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>
                                    <div className="flex justify-center">
                                        <Image
                                            src={`/images/logo.svg`}
                                            width="100"
                                            height="100"
                                            alt="logo-image"
                                            className="w-10 h-14 "
                                        />
                                    </div>
                                </DrawerTitle>
                            </DrawerHeader>
                            <nav className="px-4 mt-10">
                                <ul className="flex flex-col gap-2">
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        Home
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        About Us
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        Tutors
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        Faq
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        Login
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        Register
                                    </li>
                                </ul>
                            </nav>
                        </DrawerContent>
                    </Drawer>
                </div>
            ) : (
                <nav className="flex justify-between bg-theme-color px-36 py-4">
                    <Image
                        src={`/images/logo-white.svg`}
                        width="100"
                        height="100"
                        alt="logo-image"
                        className="w-6 h-10"
                    />
                    <ul className="flex gap-4 text-white items-center font-montserrat">
                        <li className="py-2 px-6 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            Home
                        </li>
                        <li className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            About Us
                        </li>
                        <li className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            Tutors
                        </li>
                        <li className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            Faq
                        </li>
                        <li className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            Login
                        </li>
                        <li className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer">
                            Register
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default NavbarPage;
