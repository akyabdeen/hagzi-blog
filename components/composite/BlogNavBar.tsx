import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function BlogNavBar() {
    return (
        <>
            {/* Phone */}
            <Sidebar />

            {/* Desktop/Tablet */}
            <NavBar />
        </>
    );
}