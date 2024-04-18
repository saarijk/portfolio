import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import IndexPage from "./Pages/IndexPage";
import MainLayout from "./Layouts/MainLayout";
import NewSkills from "./Components/NewSkills/Index";
import NewProjects from "./Components/NewProjects.tsx";
import NewContact from "./Components/NewContact/index.tsx";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route index element={}> for index page */}
        <Route index element={<HomePage />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/index" element={<IndexPage />} />
          <Route path="/skills" element={<NewSkills />} />
          <Route path="/projects" element={<NewProjects />} />
          <Route path="/contact" element={<NewContact />} />
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
