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
import Link from 'next/link';

const NavbarPage = () => {
    const mobile = useIsMobile();

    return (
        <div>
            {' '}
            {mobile ? (
                <div>
                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <Button className="rounded-none bg-transparent text-black">
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
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        <Link href="/tutors">Tutors</Link>
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        <Link href="/faq">Faq</Link>
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li className="p-2 transition-colors hover:bg-theme-hover cursor-pointer">
                                        <Link href="/register">Register</Link>
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
                        <li>
                            <Link
                                className="py-2 px-6 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tutors"
                                className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                            >
                                Tutors
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                            >
                                Faq
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login"
                                className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/register"
                                className="py-2 px-4 rounded-md transition-colors duration-500 ease-in-out hover:bg-theme-blue cursor-pointer"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default NavbarPage;
