import UnsplashLogo from "./images/UnsplashLogo";

type Props = {
    topic: string;
    description: string;
    contributors: number;
};

export default function TopicDisplay({ topic, description, contributors }: Props) {
    return (
        <div className="flex flex-col shadow-md rounded-lg bg-red-200 m-3">
            <div className="flex-1 bg-blue-200 rounded-t-lg">Image</div>
            <div className="px-2">
                <div className="py-2">
                    <div className="inline-block w-4/5">
                        <div className="block font-bold">{topic}</div>
                        <div className="block">by Unsplash</div>
                    </div>
                    <div className="inline-block border border-solid rounded-full">
                        <UnsplashLogo width={15} height={15} />
                    </div>
                </div>
                <div className="block pb-2">{description}</div>
                <div className="block py-2">{contributors}k contributions</div>
            </div>
        </div>
    );
    
}
//TODO: Figure out why its not displaying correctly