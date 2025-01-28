import { BlogPostCoverType } from "./blog-post-cover";

export type BlogArticlesType = {
    totalCount: number;
    countPerPage: number;
    currentPage: number;
    searchResults: BlogPostCoverType[];
}