import { FaPhoneAlt } from "react-icons/fa";
import Button from "../pure/Button";
import Link from "next/link";
import { NAVBARLINKS } from "@/constants/blog-nav-bar";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

export default function BlogNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(isOpen => !isOpen);

    return (
        <>
            {/* Phone */}
            <div>
                <div className={`fixed w-56 md:hidden ${isOpen ? 'bg-white' : ''} text-center z-20`}>
                    <div className="w-full flex">
                        <button className="mx-3 mt-3" onClick={toggle}><VscThreeBars size={36} fill="#2e74bc"/></button>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} h-screen bg-white`}>
                        <ul className="flex flex-col space-y-8 mt-10 text-xl font-semibold">
                            {NAVBARLINKS.map((link, index) => (
                                <li key={index} className="w-full">
                                    <Link className="block py-4 w-full hover:bg-hagzi_blue hover:text-white transition-colors duration-75" href={link.link} onClick={toggle}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`absolute md:hidden ${isOpen ? 'block' : 'hidden'} w-full h-screen bg-black/30 z-10`}></div>
            </div>

            {/* Desktop/Tablet */}
            <div className="hidden md:flex flex-wrap justify-around shadow-md z-10">
                <div className="flex justify-center gap-4 items-center">
                    <Link href="/">
                        <img 
                            src="/logo.webp"
                            className="mr-4"
                            />
                    </Link>
                    <ul className="flex font-semibold text-hagzi_blue h-24">
                        {NAVBARLINKS.map((link, index) => (
                            <li key={index} className="hover:bg-hagzi_blue hover:text-white transition-colors duration-75 h-full w-28">
                                <Link href={link.link} className="h-full flex items-center">
                                    <span className="w-full text-center">
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex justify-center gap-4 items-center">
                    <ul className="flex gap-4 mb-0">
                        <li className="flex gap-2 items-center text-hagzi_blue">
                            <FaPhoneAlt fill="#2e74bc"/>
                            <span>+962-79-8882727</span>
                        </li>
                        <li>
                            <Button variant={'outline'}>
                                Login
                            </Button>
                        </li>
                        <li>
                            <Button>
                                I am a landlord
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}