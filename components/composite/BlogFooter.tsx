import Link from "next/link";
import FooterLinks from "../pure/FooterLink";
import { NEIGHBORHOODS, PROPERTY_TYPES } from "@/constants/links";
import BottomFooter from "../pure/BottomFooter";

export default function BlogFooter() {
    return (
        <>
            <div className="container px-10 lg:px-10 mx-auto flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between py-10">
                <div>
                    <Link href="/">
                        <img src="/logo.webp" alt="Logo"/>
                    </Link>
                </div>
                <FooterLinks footerLinks={PROPERTY_TYPES}/>
                <FooterLinks footerLinks={NEIGHBORHOODS} />
            </div>
            <BottomFooter />
        </>
    );
}