import { IMAGEREGEX } from "@/constants/regex";
import { BlogPostCoverType } from "@/types/blog-post-cover";
import Image from "next/image";
import Link from "next/link";
import Tag from "../pure/Tag";

const blogPost = {
    id: 1554,
    cover_image_url: 'https://hagzi.jo/wp-content/uploads/2023/01/300-expats-on-where-to-live-in-amman.webp',
    title_en: '300 Expats on where to live in Amman',
    description_en: 'Living in Amman is definitely easy & safe. According to Jordan Times, we are ranked among the 9th safest country in the world.  Confused about where to live in Amman?  Let us guide you step by step to make an informed decision, don’t worry! Most of the areas in west Amman are suitable to live …',
    tags: 'new tag 7-1 en,tag2'
}

export default function BlogPostCover({post, key}: {post: BlogPostCoverType, key?: string | number}) {
    const {id, cover_image_url, title_en, description_en, tags} = post;
    
    return (
        <div className="rounded-md" key={key}>
            {cover_image_url && cover_image_url.match(IMAGEREGEX) && (
                <div className="relative py-52">
                    <Image src={cover_image_url} alt={`${title_en}-img`} fill className="object-cover rounded-t-md"/>
                </div>
            )}
            <div className="p-5 mt-0 flex flex-col gap-2 font-normal bg-white text-gray-400 rounded-b-md">
                <h1 className="text-hagzi_blue text-xl font-semibold">{title_en}</h1>
                <p>{description_en}</p>
                <div className="flex flex-wrap items-center gap-2">
                    {tags && <p>Tags: </p>}
                    {tags && tags.split(',').map((tag, tagIndex) => (
                        <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                </div>
                <div className="mx-auto my-3 w-full border-[1.5px] border-gray-200"></div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div>{id}</div>
                    </div>
                    <Link href={`/blog/${id}`} className="px-4 py-3 bg-hagzi_blue rounded-md text-white font-medium hover:bg-white hover:text-black">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}