import { FooterLinksType } from "@/types/links";

export default function FooterLinks({footerLinks: {title, links}}: {footerLinks: FooterLinksType}) {
    return (
        <div>
            <p className="font-semibold cursor-pointer">{title}</p>
            <ul>
                {links.map(link => (
                    <li>
                        <span className="hover:text-hagzi_blue hover:font-semibold cursor-pointer w-fit">
                            {link}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}