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
            <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black font-bold">FitLog</h1>
            <div className="flex text-[13px] font-ibm">
                {/* container */}
                <div className="w-1/2 h-full flex flex-wrap p-3 max-h-[400px] overflow-y-auto">
                    {/* left side */}
                    <p className="pl-6 leading-normal p-3">
                        My first ever full-stack application: I made a simple app for users to track their workouts. The backend app uses GraphQL and TypeScript, and it has a React/TypeScript frontend app that uses Tailwind for styling.
                    </p>
                    <p className="px-6">
                        SPECIAL FEATURES:
                    </p>
                    <ul className="list-disc pl-8 pr-3">
                    <li className="my-2">Created GraphQL schema, enforced strong typing with TypeScript</li>
                        <li className="my-2">API integration for user registration, login, and posting workouts</li>
                        <li className="my-2">User data stored locally (passwords hashed)</li>
                        <li className="my-2">Basic input validation and user feedback</li>
                        <li className="my-2">Tailwind CSS combined with traditional CSS were used for styling</li>
                        <li className="my-2">Custom fonts from Google Fonts</li>
                        <li className="my-2">Backend created with a schema-first approach</li>
                        <li className="my-2">Codegen used in the frontend to help manage GraphQL types, queries, and mutations</li>
                        <li className="my-2">JWTs used for user authentication</li>
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