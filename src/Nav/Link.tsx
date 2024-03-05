import { SelectedPage } from "@/Shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props ) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`hover-underline-animation ${selectedPage === lowerCasePage ? "text-slate-500": ""} 
            transition duration-500 hover:text-black`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;