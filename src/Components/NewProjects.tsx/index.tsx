import ProjectCard from './ProjectCard'
import rm1 from "@/assets/screencaps/rm1.png";
import rm2 from "@/assets/screencaps/rm2.png";
import sl1 from "@/assets/screencaps/sl1.png";
import sl2 from "@/assets/screencaps/sl2.png";
import sl3 from "@/assets/screencaps/sl3.png";
import sl4 from "@/assets/screencaps/sl4.png";
import sl5 from "@/assets/screencaps/sl5.png";
import a1 from "@/assets/screencaps/a1.png";
import a2 from "@/assets/screencaps/a2.png";
import a3 from "@/assets/screencaps/a3.png";
import g1 from "@/assets/screencaps/g1.png";
import g2 from "@/assets/screencaps/g2.png";
import g3 from "@/assets/screencaps/g3.png";
import g4 from "@/assets/screencaps/g4.png";
import g5 from "@/assets/screencaps/g5.png";

type Props = {}

function NewProjects({ }: Props) {
    return (
        <>
            <div className="h-[55vh] w-full font-montserrat flex justify-center items-center">
                <div className="w-5/6 max-w-[1080px] h-5/6 mt-[-250px]">
                    <h1 className="text-5xl font-bold text-center p-8 mt-[60px]">Projects</h1>
                    <div className="pb-[100px]">
                        <ProjectCard projectName={'RecipeMe'} description={'This was my first successful TypeScript/React project. Users can browse the site and search for recipes using a custom API.'} specialFeatures={["Uses Tailwind CSS for styling", "Framer Motion used for animations/transitions", "Custom fonts from Google Fonts", "Modular structure", "Has search function using custom API", "Users can add recipes to their favourites", "Built on Vite"]} images={[rm1, rm2]} lightBg={true} />
                        <ProjectCard projectName={'See-LEVEL'} description={"This is a redesign proposal I made for See-LEVEL. It is a simgle-page design, and aimed to modernise See-LEVEL's existing website using contemporary design principles to elevate overall user experience."} specialFeatures={["Dynamic and responsive design using a combination of Tailwind and traditional CSS", "Framer Motion used for animations/transitions", "Custom fonts from Google Fonts", "Modular structure", "Dynamic carousel displaying testimonials from users", "Simple contact form"]} images={[sl1, sl2, sl3, sl4, sl5]} lightBg={false} />
                        <ProjectCard projectName={'ARNEURA'} description={"I worked on the design and enhancement of ARNEURA's platform. I implemented a Login page, Settings page, and provided various visual enhancements to the UI/UX"} specialFeatures={["API integration for login", "Tailwind CSS combined with traditional CSS were used for styling", "Custom fonts from Google Fonts", "Light mode / Dark mode -feature", "Right sidebar has different tabs for different utility"]} images={[a1, a2, a3]} lightBg={true} />
                        <ProjectCard projectName={'FitLog'} description={'My first ever foll-stack application: I made a simple app for users to track their workouts. The backend app uses GraphQL and TypeScript, and it has a React/TypeScript frontend app that uses Tailwind for styling.'} specialFeatures={["Created GraphQL schema, enforced by strong typing from TypeScript", "API integration for user registration, login, and posting workouts", "User data stored locally", "Passwords hashed", "Basic input validation and user feedback", "Backend created with a schema-first approach", "Codegen used in the frontend to manage GraphQL types, queries, and mutations", "JWTs used for user authentication"]} images={[g1, g2, g3, g4, g5]} lightBg={false} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProjects