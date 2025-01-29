import { IMAGEREGEX } from "@/constants/regex";
import { BlogPostCoverType } from "@/types/blog-post-cover";
import Image from "next/image";
import Link from "next/link";
import Tag from "../pure/Tag";

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
                        <Tag key={tagIndex} title={tag}>{tag}</Tag>
                    ))}
                </div>
                <div className="mx-auto my-3 w-full border-[1.5px] border-gray-200"></div>
                <div className="flex justify-end">
                    <Link href={`/blog/${id}`} className="px-4 py-3 bg-hagzi_blue rounded-md text-white font-medium hover:border hover:border-hagzi_blue hover:bg-white hover:text-hagzi_blue">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}