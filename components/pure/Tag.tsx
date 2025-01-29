import { useRouter } from "next/router";

export default function Tag({key, children, title}: {key?: string | number, children: React.ReactNode, title: string}) {
    const router = useRouter();

    const handleSearch = () => {
        router.push({
            pathname: '/blog',
            query: {page: 1, search: title}
        })
    }

    return (
        <div key={key} className="border border-gray-200 bg-gray-100 text-gray-400 py-2 px-4 cursor-pointer hover:text-black hover:border-black" onClick={handleSearch}>{children}</div>
    );
}