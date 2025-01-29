import Image from "next/image";
import Button from "../pure/Button";

export default function BecomeAnAgent() {
    return (
        <div className="relative h-64 rounded-md">
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full bg-black/50 z-10 rounded-md"></div>
                <Image src="https://www.shutterstock.com/image-photo/professional-male-lawyer-financial-advisor-600nw-2016949892.jpg" alt="Meeting" fill className="object-cover rounded-md"/>
            </div>
            <div className="relative pt-32 p-2 flex flex-col gap-2 z-10">
                <h1 className="text-xl font-semibold text-white">Do you want to join our real estate network?</h1>
                <Button className="w-fit">Become an Agent</Button>
            </div>
        </div>
    );
}