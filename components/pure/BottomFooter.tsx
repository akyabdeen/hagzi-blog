export default function BottomFooter() {
    return (
        <div className="bg-gray-100 text-sm text-hagzi_blue py-4">
            <div className="container px-10 md:px-10 mx-auto flex flex-wrap flex-row justify-between">
                <ul className="flex gap-4">
                    <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">
                        About Us
                    </li>
                    <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">
                        Careers
                    </li>
                    <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">
                        Contact Us
                    </li>
                    <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">
                        Privacy
                    </li>
                    <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">
                        Terms Of Use
                    </li>
                </ul>
                <p>Hagzi@2025</p>
            </div>
        </div>
    );
}