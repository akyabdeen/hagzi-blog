import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context;

    return {
        props: {message: query.message},
    };
}

export default function ErrorPage({message} : {message: string}) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {message}
        </div>
    );
}