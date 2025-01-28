export const fetchBlogPosts = async (page: string | undefined, search: string | undefined) => {
    const res = await fetch(`https://c7be-82-212-85-210.ngrok-free.app/blog-articles?page=${page ? page : 1}&search_term=${search ? search : ""}`);

    console.log(`https://c7be-82-212-85-210.ngrok-free.app/blog-articles?page=${page ? page : 1}&search_term=${search ? search : ""}`);

    const { data } = await res.json();

    return data;
}

export const fetchBlogPostById = async (id: number) => {
    const res = await fetch(`https://c7be-82-212-85-210.ngrok-free.app/blog-articles/${id}`);
    const { data } = await res.json();

    return data;
}

export const fetchRelatedPosts = async (id: number) => {
    const res = await fetch(`https://c7be-82-212-85-210.ngrok-free.app/blog-articles/related-articles/${id}`);

    const { data } = await res.json();

    return data;
}

export const fetchAllTags = async () => {
    const res = await fetch('https://c7be-82-212-85-210.ngrok-free.app/blog-articles/tags');

    const { data } = await res.json();

    return data;
}