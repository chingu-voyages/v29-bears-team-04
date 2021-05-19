import { useParams } from "react-router";

interface CategoryParam {
    type: string;
}

export default function Topic() {
    let { type } = useParams<CategoryParam>();
    return (
        <>
            <h1>{type}</h1>
            <div>This is this {type}'s specific page</div>
            <div className="masonry-1-col sm:masonry-3-col sm:mx-2">
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
                <div className="break-inside mb-2 h-20 bg-green-400">.</div>
                <div className="break-inside mb-2 bg-green-400 h-60">.</div>
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
                <div className="break-inside mb-2 bg-green-400 h-60">.</div>
                <div className="break-inside mb-2 bg-green-400 h-44">.</div>
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
                <div className="break-inside mb-2 bg-green-400 h-44">.</div>
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
                <div className="break-inside mb-2 bg-green-400">.</div>
                <div className="break-inside mb-2 h-20 bg-green-400">.</div>
                <div className="break-inside mb-2 h-14 bg-green-400">.</div>
            </div>
        </>
    );
}
