import { useRouter } from "next/router";
import Button from "./Button";

export default function SearchBar() {
    const router = useRouter();

    const {query} = router;

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const search = (form.elements.namedItem('search') as HTMLInputElement).value;

        router.push({
            pathname: '/blog',
            query: {page: 1, search}
        })
    }

    return (
        <form onSubmit={handleSearch} className="flex mb-2 gap-4">
            <input type="text" name="search" placeholder="Search..." defaultValue={query.search} className="w-full border border-gray-300 focus:shadow-md p-2 rounded-md"/>
            <Button type="submit" className="">Search</Button>
        </form>
    );
}