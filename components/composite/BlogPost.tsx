import Image from "next/image";

import { BlogPostType } from "@/types/blog-post";
import { IMAGEREGEX } from "@/constants/regex";

export default function BlogPost({blogPost, id}: {blogPost: BlogPostType, id: number}) {
    const {cover_image_url, description_en} = blogPost.article;

    return (
        <div className="rounded-md bg-white">
            {cover_image_url && cover_image_url.match(IMAGEREGEX) && (
                <div className="relative py-28">
                    <Image src={cover_image_url} alt={`${blogPost.article['Blog Name']}-img`} fill className="object-cover rounded-t-md"/>
                </div>
            )}
            <div className="mx-auto my-3 w-[95%] border-[1.5px] border-gray-200"></div>
            <div className="p-5 mt-1 flex flex-col gap-2 font-normal text-gray-400 rounded-b-md">
                <p>{description_en}</p>
            </div>
        </div>
    );
}