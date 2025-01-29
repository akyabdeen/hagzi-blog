import { FaPhoneAlt } from "react-icons/fa";
import Button from "../pure/Button";
import NavBarLink from "../pure/NavBarLink";
import Link from "next/link";
import { NAVBARLINKS } from "@/constants/blog-nav-bar";

export default function NavBar() {
    return (
        <div className="hidden md:block shadow-md z-10">
                <div className="container mx-auto px-10 flex flex-wrap mb-4 xl:mb-0 justify-between">
                    <div className="flex justify-center gap-4 items-center">
                        <Link href="/">
                            <img 
                                src="/logo.webp"
                                />
                        </Link>
                        <ul className="flex font-semibold text-hagzi_blue h-24">
                            {NAVBARLINKS.map((link, index) => (
                                <NavBarLink link={link.link} label={link.label} key={index} />
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center gap-4 items-center">
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
            </div>
    );
}