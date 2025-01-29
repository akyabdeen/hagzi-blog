import { NAVBARLINKS } from "@/constants/blog-nav-bar";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../pure/Button";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(isOpen => !isOpen);

        if (!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    return (
        <>
            <div className="md:hidden flex justify-center py-4 my-1 shadow-md h-full">
                <Link href="/">
                    <img
                        src="/logo.webp"
                        />
                </Link>
            </div>
            <div className={`fixed w-72 md:hidden ${isOpen ? 'bg-white animate-appearFromLeft' : ''} text-center z-20`}>
                <div className="w-full flex">
                    <button className="mx-3 mt-3 bg-hagzi_blue drop-shadow-xl rounded-md" onClick={toggle}><VscThreeBars size={36} fill="white" /></button>
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
                        <li className="flex space-x-2 justify-center items-center text-hagzi_blue">
                            <FaPhoneAlt fill="#2e74bc" />
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
            <div className={`fixed md:hidden ${isOpen ? 'block' : 'hidden'} w-full h-screen bg-black/30 z-10`}></div>
        </>
    );
}