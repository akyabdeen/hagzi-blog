import BecomeAnAgent from "@/components/composite/BecomeAnAgent";
import BlogPostCover from "@/components/composite/BlogPostCover"
import BlogGridLayout from "@/components/layout/BlogGridLayout";
import Pagination from "@/components/pure/Pagination";
import SearchBar from "@/components/pure/SearchBar";
import { fetchAllTags, fetchBlogPosts } from "@/lib/blogService";
import { BlogArticlesType } from "@/types/blog-articles";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { capitalize } from "@/utils/functions"
import { TagType } from "@/types/tag";
import Tag from "@/components/pure/Tag";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const { query } = context;

        const pathname = context.resolvedUrl.split('?')[0];

        const { page, search } = query;

        const blogArticles = await fetchBlogPosts(Array.isArray(page) ? page[0] : page, (Array.isArray(search) ? search[0] : search));
        const tags = await fetchAllTags();

        return { props: { blogArticles, tags, pathname } };
    } catch (error: unknown | Error) {
        return {
            redirect: {
                destination: `/error?message=${encodeURIComponent(error instanceof Error ? error.message : "This error")}`,
                permanent: false,
            }
        }
    }
}

export default function Blog({ blogArticles, tags, pathname }: { blogArticles: BlogArticlesType, tags: TagType[], pathname: string }) {
    const posts = blogArticles?.searchResults;

    const crumbs = pathname.split('/');

    return (
        <>
            <div className="py-5 flex gap-2 text-md bg-white shadow-sm text-hagzi_blue font-semibold">
                <ul className="container flex justify-center ml-0 lg:ml-36 lg:justify-start">
                    <li key="home" className="text-gray-400 font-normal">
                        <Link href="/">
                            Home ·
                        </Link>
                    </li>
                    {crumbs.map((path, pathIndex) => (
                        <>
                            {pathIndex !== 0 && (
                                <li key={pathIndex} className="ml-1">
                                    <Link href={crumbs.slice(pathIndex).join('')}>
                                        {capitalize(path)} {pathIndex === 0 || pathIndex === crumbs.length - 1 ? '' : '·'}
                                    </Link>
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            <div className="container px-0 md:px-10 mx-auto">
                <BlogGridLayout
                    leftElement={(
                        <div className="flex flex-col gap-4">
                            {posts?.map((post, postIndex) => (
                                <BlogPostCover post={post} key={postIndex} />
                            ))}
                            <div className="flex gap-4 items-center justify-center my-10">
                                <Pagination numOfPosts={blogArticles.totalCount} currentPage={blogArticles.currentPage} />
                            </div>
                        </div>
                    )} rightElement={(
                        <div className="">
                            <SearchBar />
                            <BecomeAnAgent />
                            <div className="overflow-hidden">
                                <p className="text-2xl text-hagzi_blue font-semibold my-4">Tags</p>
                                <ul className="flex flex-wrap gap-2">
                                    {tags.map((tag, tagIndex) => (
                                        <li key={tagIndex}>
                                            <Tag>{tag.title_en}</Tag>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                />
                {/* <div className="w-full flex items-center justify-center gap-2 my-10">
                    <Pagination numOfPosts={blogArticles.totalCount} currentPage={blogArticles.currentPage}/>
                </div> */}
            </div>
        </>
    );
}