import g1 from "@/assets/screencaps/g1.png";
import g2 from "@/assets/screencaps/g2.png";
import g3 from "@/assets/screencaps/g3.png";
import g4 from "@/assets/screencaps/g4.png";
import g5 from "@/assets/screencaps/g5.png";

type Props = {}

function Gymapp({}: Props) {
  const imagePaths = [g1, g2, g3, g4, g5];
  return (
    <>
        <div>
            <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black font-bold">GYMAPP</h1>
            <div className="flex text-[15px] font-bold">
                {/* container */}
                <div className="w-1/2">
                    {/* left side */}
                    <p className="p-6">
                        My first ever fullstack application: I made a simple backend app using GraphQL and TypeScript, and a React/TypeScript frontend app that used Tailind for styling.
                    </p>
                    <p className="px-6 py-3">
                        SPECIAL FEATURES:
                    </p>
                    <ul className="px-6">
                        <li>API integration for regustration, login, and posting workouts</li>
                        <li>Tailwind CSS combined with traditional CSS were used for styling</li>
                        <li>Custom fonts from Google Fonts</li>
                        <li>Backend created with a schema-first approach</li>
                        <li>Codegen used in the frontend to help manage GraphQL queries/types</li>
                    </ul>
                    
                </div>
                <div className="w-1/2 flex-1 h-auto">
                {/* right side */}
                    <div className="flex flex-wrap p-3 justify-around max-h-[400px] overflow-y-auto ">
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

export default Gymapp