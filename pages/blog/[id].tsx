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
                destination: `/error?message=${encodeURIComponent(error instanceof CustomError ? error.message : "This error")}`,
                permanent: false,
            }
        }
    }
}

export default function BlogPostPage({fullPath, blogPost, relatedPosts, id}: {fullPath: string, blogPost: BlogPostType, relatedPosts: RelatedPost[], id: number}) {    
    const crumbs = fullPath.split('/');

    return (
        <>
            <div className="relative h-96">
                <div className="relative z-10 text-white text-4xl md:text-6xl font-bold h-full flex items-center pl-4 pr-4 xl:pr-0 xl:pl-56">
                    {blogPost?.article['title_en']}
                </div>
                <div className="absolute inset-0 z-0">
                    <Image src="https://i.ytimg.com/vi/zumJJUL_ruM/maxresdefault.jpg" alt="Beautiful home" fill className="object-cover"/>
                    <div className={`relative w-full h-full bg-black/50 z-10`}></div>
                </div>
            </div>
            <ul className="py-3 flex flex-wrap px-2 gap-2 justify-center text-xl bg-white">
                    <li>
                        <Link href="/">
                            Home ·
                        </Link>
                    </li>
                    {crumbs.map((path, pathIndex) => (
                        <>
                            {pathIndex !== 0 && (
                                <li key={pathIndex}>
                                    <Link href={`/${crumbs.slice(0, pathIndex + 1).join('/')}`}>
                                        {pathIndex === crumbs.length - 1 ? blogPost?.article['title_en'] : capitalize(path)} {pathIndex === 0 || pathIndex === crumbs.length - 1 ? '' : '·'}
                                    </Link>
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            <div className="flex flex-col px-0 justify-center">
                <BlogGridLayout 
                    leftElement={(
                        <div className="">
                            <BlogPost blogPost={blogPost} id={id} />
                            {/* <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row rounded-md text-white">
                                {blogPost.prevArticles && <Link href={`/blog/${blogPost.prevArticles.id}`} className={`pl-6 py-4 w-full h-full bg-hagzi_blue flex justify-start rounded-l-md rounded-r-md sm:rounded-l-md sm:rounded-r-${blogPost.nextArticles ? 'none' : 'md'} cursor-pointer`}>Prev - {blogPost.prevArticles.title_en}</Link>}
                                {blogPost.nextArticles && <Link href={`/blog/${blogPost.nextArticles.id}`}  className={`pr-6 py-4 w-full h-full bg-hagzi_blue flex justify-end rounded-l-md rounded-r-md sm:rounded-r-md sm:rounded-l-${blogPost.prevArticles ? 'none' : 'md'} cursor-pointer`}>Next - {blogPost.nextArticles?.title_en}</Link>}
                            </div> */}
                        </div>
                    )}
                    rightElement={(
                        <div className="flex flex-col gap-10">
                            <SearchBar/>
                            <BecomeAnAgent />
                        </div>
                    )}
                    />
                    <div className="container mx-auto px-6">
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