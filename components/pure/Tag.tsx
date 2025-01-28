export default function Tag({key, children}: {key?: string | number, children: React.ReactNode}) {
    return (
        <div key={key} className="border border-gray-200 bg-gray-100 text-gray-400 py-2 px-4">{children}</div>
    );
}