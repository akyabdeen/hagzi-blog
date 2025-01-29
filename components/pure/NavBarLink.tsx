import { NavBarLinkType } from "@/types/nav-bar-link";
import Link from "next/link";

export default function NavBarLink({ label, link }: NavBarLinkType) {
    return (
        <li className="hover:bg-hagzi_blue hover:text-white transition-colors duration-75 h-full w-28">
            <Link href={link} className="h-full flex items-center">
                <span className="w-full text-center">
                    {label}
                </span>
            </Link>
        </li>
    );
}