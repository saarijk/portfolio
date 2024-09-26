import tt1 from "@/assets/screencaps/tt1.png";
import tt2 from "@/assets/screencaps/tt2.png";
import tt3 from "@/assets/screencaps/tt3.png";
import tt4 from "@/assets/screencaps/tt4.png";

type Props = {}

function TravelTrekker({ }: Props) {
    const imagePaths = [tt1, tt2, tt3, tt4];
    return (
        <>
            <div>
                <h1 className="h-[50px] flex items-center pl-6 text-3xl text-black font-bold mt-6">TravelTrekker</h1>
                <div className="flex flex-col sm:flex-row text-[13px] font-ibm">
                    {/* container */}
                    <div className="w-full sm:w-1/2 h-full flex flex-wrap p-3 overflow-y-auto">
                        {/* left side */}
                        <p className="pl-6 leading-normal p-3">
                            TravelTrekker is a live website I worked on in a small team, where I was responsible for a lot of the UI/UX elements, as well as its content.
                        </p>
                        <p className="px-6">
                            SPECIAL FEATURES:
                        </p>
                        <ul className="list-disc pl-8 pr-3">
                            <li className="my-2">Uses Tailwind CSS for styling</li>
                            <li className="my-2">NextJS used for SSR components rather than using client-side rendering</li>
                            <li className="my-2">Storing data into a database using Amazon AWS</li>
                            <li className="my-2">Reactive design and SEO considerations to improve site</li>
                            <li className="my-2">TS/React/NextJS frontend, GraphQL backend</li>
                        </ul>
                        <p className="px-6">The live site can be viewed here: <a href="https://traveltrekker.co.uk/" className="hover-underline-animation font-base text-base">LINK</a></p>

                    </div>
                    <div className="w-full sm:w-1/2 flex-1 h-auto">
                        {/* right side */}
                        <div className="flex flex-wrap p-3 justify-around max-h-[300px] sm:max-h-[500px] overflow-y-auto">
                            {imagePaths.map((image, index) => (
                                <img key={index} src={image} className="mb-2 border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 rounded-lg" alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelTrekker