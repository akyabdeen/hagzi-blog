import { POSTSPERPAGE } from "@/constants/posts";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Pagination({numOfPosts, currentPage}: {numOfPosts: number, currentPage: number}) {
    const router = useRouter();
    
    const {query} = router;

    const maxPages = Math.ceil(numOfPosts / POSTSPERPAGE);
    
    const handleChangePage = (newPage: number) => {
        router.push({
            pathname: `/blog`,
            query: {...query, page: newPage}
        })
    }

    return (
        <>
            {(currentPage > 1) && <Button onClick={() => handleChangePage(currentPage - 1)}>Previous</Button>}
            {maxPages > 0 ? <p>Page {currentPage} out of {maxPages}</p> : <p>No results found :(</p>}
            {(currentPage < maxPages) && <Button onClick={() => handleChangePage(currentPage + 1)}>Next</Button>}
        </>
    );
}