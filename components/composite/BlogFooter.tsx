export default function BlogFooter() {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 items-center px-0 sm:px-10 md:px-24 py-12 justify-between">
                <div>
                    <img src="/logo.webp" alt="Logo"/>
                </div>
                <div>
                    <p className="font-semibold cursor-pointer">Property type</p>
                    <ul>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Villa</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Apartment</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Studio</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold cursor-pointer">Most Popular Neighborhoods</p>
                    <ul>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Amman</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Abdoun</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Shmesani</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">7th Circle</li>
                        <li className="hover:text-hagzi_blue hover:font-semibold cursor-pointer">Jabal Amman</li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 text-sm text-hagzi_blue flex flex-wrap gap-4 justify-between w-full py-6 px-10">
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
        </>
    );
}