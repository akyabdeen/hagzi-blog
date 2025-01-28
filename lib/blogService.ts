export const fetchBlogPosts = async (page: string | undefined, search: string | undefined) => {
    const res = await fetch(`http://localhost:3000/blog-articles?page=${page ? page : 1}&search_term=${search ? search : ""}`);

    console.log(`http://localhost:3000/blog-articles?page=${page ? page : 1}&search_term=${search ? search : ""}`);

    const { data } = await res.json();

    return data;
}

export const fetchBlogPostById = async (id: number) => {
    const res = await fetch(`http://localhost:3000/blog-articles/${id}`);
    const { data } = await res.json();

    return data;
}

export const fetchRelatedPosts = async (id: number) => {
    const res = await fetch(`http://localhost:3000/blog-articles/related-articles/${id}`);

    const { data } = await res.json();

    return data;
}

export const fetchAllTags = async () => {
    const res = await fetch('http://localhost:3000/blog-articles/tags');

    const { data } = await res.json();

    return data;
}