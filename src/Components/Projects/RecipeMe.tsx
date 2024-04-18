import rm1 from "@/assets/screencaps/rm1.png";
import rm2 from "@/assets/screencaps/rm2.png";

type Props = {}

function RecipeMe({ }: Props) {
    const imagePaths = [rm1, rm2];
    return (
        <>
            <div id="recipme">
                <h1 className="mt-[80px] h-[50px] flex items-center pl-6 text-3xl text-black font-bold">RecipeMe</h1>
                <div className="flex flex-col text-[13px] font-ibm">
                    {/* container */}
                    <div className="w-full h-full flex flex-wrap p-3 max-h-[450px] overflow-y-auto">
                        {/* left side */}
                        <p className="pl-6 leading-normal p-3">
                            This was my first successful TypeScript/React project. It uses a custom API to retrieve recipes for users to browse and favourite.
                        </p>
                        <p className="px-6">
                            SPECIAL FEATURES:
                        </p>
                        <ul className="list-disc pl-8 pr-3">
                            <li className="my-2">Uses Tailwind CSS for styling</li>
                            <li className="my-2">Framer Motion for animations/transitions</li>
                            <li className="my-2">Custom fonts from Google Fonts</li>
                            <li className="my-2">Modular structure</li>
                            <li className="my-2">Search function using custom API</li>
                            <li className="my-2">Users can "favourite" recipes</li>
                            <li className="my-2">Built on Vite</li>
                        </ul>

                    </div>
                    <div className="w-5/6 flex items-center justify-center mx-auto">
                        <div className="flex-1 h-auto">
                            {/* right side */}
                            <div className="flex flex-wrap p-3 justify-around max-h-[800px] overflow-y-auto">
                                {imagePaths.map((image, index) => (
                                    <img key={index} src={image} className="mb-2 border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 rounded-lg" alt={`Image ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeMe