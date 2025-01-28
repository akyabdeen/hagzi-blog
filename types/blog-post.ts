import { RelatedPost } from "./related-posts";

export type BlogPostType = {
    article: Article;
    prevArticles: RelatedPost;
    nextArticles: RelatedPost;
}

type Article = {
    'Blog Name': string;
    title_en: string;
    description_en: string;
    description_ar: string;
    related_links: RelatedLink[];
    cover_image_url: string;
}

type RelatedLink = {
    url: string;
    text: string;
}