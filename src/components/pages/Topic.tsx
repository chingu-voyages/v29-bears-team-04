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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 sm:mx-2">
                <div className="grid grid-flow-row auto-rows-min gap-y-3">
                    <div className="h-14 bg-green-400">.</div>
                    <div className="h-20 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="bg-green-400 h-44">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-44">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="h-20 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                </div>
                <div className="grid grid-flow-row auto-rows-min gap-y-3">
                    <div className="h-20 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="bg-green-400 h-44">.</div>
                    <div className="h-20 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                </div>
                <div className="grid grid-flow-row auto-rows-min gap-y-3">
                    <div className="h-14 bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="bg-green-400">.</div>
                    <div className="bg-green-400 h-44">.</div>
                    <div className="h-14 bg-green-400">.</div>
                    <div className="bg-green-400 h-44">.</div>
                    <div className="h-20 bg-green-400">.</div>
                    <div className="bg-green-400 h-60">.</div>
                    <div className="h-20 bg-green-400">.</div>
                </div>
            </div>
        </>
    );
}
