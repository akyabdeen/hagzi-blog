export default function BlogGridLayout({leftElement, rightElement}: {leftElement: React.ReactNode, rightElement: React.ReactNode}) {
    return (
        <div className="my-10">
            <div className="flex flex-col mx-6 lg:flex-row lg:container lg:mx-auto gap-4">
                <div className="lg:w-2/3">
                    {leftElement}
                </div>
                <div className="w-full lg:w-1/3">
                    {rightElement}
                </div>
            </div>
        </div>
    );
}