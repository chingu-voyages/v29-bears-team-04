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
        </>
    );
}
