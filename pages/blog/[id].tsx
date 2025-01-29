import BecomeAnAgent from "@/components/composite/BecomeAnAgent";
import BlogPost from "@/components/composite/BlogPost";
import BlogGridLayout from "@/components/layout/BlogGridLayout";
import Button from "@/components/pure/Button";
import SearchBar from "@/components/pure/SearchBar";
import { IMAGEREGEX } from "@/constants/regex";
import { fetchBlogPostById, fetchRelatedPosts } from "@/lib/blogService";
import { BlogPostType } from "@/types/blog-post";
import { RelatedPost } from "@/types/related-posts";
import { capitalize } from "@/utils/functions";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const {id} = context.params!;
        
        const fullPath = context.resolvedUrl;

        // do something

        const blogPost = await fetchBlogPostById(Number(id));
        const relatedPosts = await fetchRelatedPosts(Number(id));
        
        return {
            props: {
                fullPath,
                blogPost,
                relatedPosts,
                id
            }
        }
    } catch (error: Error | unknown) {
        return {
            redirect: {
                destination: `/error?message=${encodeURIComponent(error instanceof Error ? error.message : "This error")}`,
                permanent: false,
            }
        }
    }
}

export default function BlogPostPage({fullPath, blogPost, relatedPosts, id}: {fullPath: string, blogPost: BlogPostType, relatedPosts: RelatedPost[], id: number}) {    
    const crumbs = fullPath.split('/');

    return (
        <>
            <div className="relative h-96 flex">
                <div className="container mx-auto flex justify-center md:justify-start items-center">
                    <div className="relative z-10 px-16 lg:px-10 text-white text-4xl md:text-6xl font-bold text-center md:text-start">
                        {blogPost?.article['title_en']}
                    </div>
                    <div className="absolute inset-0 z-0">
                        <Image src="https://i.ytimg.com/vi/zumJJUL_ruM/maxresdefault.jpg" alt="Beautiful home" fill className="object-cover"/>
                        <div className={`relative w-full h-full bg-black/50 z-10`}></div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-xl py-4">
                <ul className="container px-16 lg:px-10 mx-auto flex flex-wrap justify-center md:justify-start gap-4">
                    <li>
                        <Link href="/">
                            Home ·
                        </Link>
                    </li>
                    {crumbs.map((path, pathIndex) => (
                        <>
                            {pathIndex !== 0 && (
                                <li key={pathIndex} className={pathIndex === crumbs.length - 1 ? 'text-hagzi_blue font-semibold' : ''}>
                                    {pathIndex !== crumbs.length - 1 ? (
                                        <Link href={`/${crumbs.slice(0, pathIndex + 1).join('/')}`}>
                                            {pathIndex === crumbs.length - 1 ? blogPost?.article['title_en'] : capitalize(path)} ·
                                        </Link>
                                        ) : (
                                            `${pathIndex === crumbs.length - 1 ? blogPost?.article['title_en'] : capitalize(path)}`
                                        )}
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col px-0 justify-center">
                    <div className="container mx-auto px-10">
                        <BlogGridLayout 
                            leftElement={(
                                <div className="">
                                    <BlogPost blogPost={blogPost} />
                                    {/* <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row rounded-md text-white">
                                        {blogPost.prevArticles && <Link href={`/blog/${blogPost.prevArticles.id}`} className={`pl-6 py-4 w-full h-full bg-hagzi_blue flex justify-start rounded-l-md rounded-r-md sm:rounded-l-md sm:rounded-r-${blogPost.nextArticles ? 'none' : 'md'} cursor-pointer`}>Prev - {blogPost.prevArticles.title_en}</Link>}
                                        {blogPost.nextArticles && <Link href={`/blog/${blogPost.nextArticles.id}`}  className={`pr-6 py-4 w-full h-full bg-hagzi_blue flex justify-end rounded-l-md rounded-r-md sm:rounded-r-md sm:rounded-l-${blogPost.prevArticles ? 'none' : 'md'} cursor-pointer`}>Next - {blogPost.nextArticles?.title_en}</Link>}
                                    </div> */}
                                </div>
                            )}
                            rightElement={(
                                <div className="h-full flex flex-col justify-between">
                                    <SearchBar/>
                                    <BecomeAnAgent />
                                </div>
                            )}
                            />
                    </div>
                    <div className="container mx-auto px-16 lg:px-10">
                        {relatedPosts.length !== 0 && <div className="flex flex-col gap-2 mb-10">
                            <h1 className="text-2xl font-bold">Related Articles</h1>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                {relatedPosts.map((post, postIndex) => (
                                    <div key={postIndex} className="h-96 flex flex-col justify-end pb-3 bg-white rounded-md w-full sm:w-1/3">
                                        {post.cover_image_url.match(IMAGEREGEX) && <div className="relative h-72">
                                            <Image src={post.cover_image_url} alt={`${post.title_en}-img`} fill className="object-cover rounded-t-md"/>
                                        </div>}
                                        <div className="flex flex-col gap-3 mt-1">
                                            <span className="flex items-center px-3">
                                                {post.title_en}
                                            </span>
                                            <Link href={`/blog/${post.id}`}>
                                                <Button className="mx-3 w-fit">Read More</Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
            </div>
        </>
    );
}