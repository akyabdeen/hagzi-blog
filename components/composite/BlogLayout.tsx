import BlogFooter from "./BlogFooter";
import BlogNavBar from "./BlogNavBar";

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="container mx-auto max-w-full flex flex-col min-h-screen">
            <BlogNavBar />
            <div className="flex-1 bg-slate-50">
                {children}
            </div>
            <BlogFooter />
        </div>
    );
}

export default BlogLayout;