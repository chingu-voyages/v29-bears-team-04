import UnsplashLogo from "./images/UnsplashLogo";

type Props = {
    topic: string;
    description: string;
    contributors: number;
};

export default function TopicDisplay({ topic, description, contributors }: Props) {
    return (
        <div className="flex flex-col shadow-md rounded-lg bg-red-200">
            <div className="block bg-blue-200 rounded-t-lg">Image</div>
            <div className="flex flex-col p-4">
                <div className="grid grid-cols-4 gap-x-4 items-center pb-4">
                    <div className="flex flex-col py-2 col-span-3">
                        <h4 className="font-bold text-xl">{topic}</h4>
                        <div>by Unsplash</div>
                    </div>
                    <div className="flex justify-center items-center p-2 rounded-full border border-solid sm:p-2 h-12 w-12 border-black">
                        <UnsplashLogo width={42} height={40} />
                    </div>
                </div>
                <div className="pb-2">{description}</div>
                <div className="py-2">{contributors}k contributions</div>
            </div>
        </div>
    );
}
