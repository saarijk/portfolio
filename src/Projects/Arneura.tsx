import a1 from "@/assets/screencaps/a1.png";
import a2 from "@/assets/screencaps/a2.png";
import a3 from "@/assets/screencaps/a3.png";

type Props = {}

function Arneura({}: Props) {
  const imagePaths = [a1, a2, a3];
  return (
    <>
        <div>
            <h1 className="hover:cursor-pointer h-[50px] flex items-center pl-6 text-3xl text-black font-bold">ARNEURA</h1>
            <div className="flex text-[15px] font-bold">
                {/* container */}
                <div className="w-1/2">
                    {/* left side */}
                    <p className="p-6">
                        I worked on the design and enhancement of ARNEURA's platform. I implemented a Login page, Settings page, and provided various visual enhancements to the UI/UX.
                    </p>
                    <p className="px-6 py-3">
                        SPECIAL FEATURES:
                    </p>
                    <ul className="px-6">
                        <li>API integration for login</li>
                        <li>Tailwind CSS combined with traditional CSS were used for styling</li>
                        <li>Custom fonts from Google Fonts</li>
                        <li>Settings page has a Light mode / Dark mode feature</li>
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

export default Arneura