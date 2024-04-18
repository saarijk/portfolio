import Header from '@/Components/Header';
import LeftSidebar from '@/Components/LeftSidebar';
import Hero from '@/Components/Hero';

type Props = {}

function IndexPage({ }: Props) {

    return (
        <>
            <div className="index-page">
                <Header />
                <LeftSidebar />
                <Hero />
            </div>
        </>
    )
}

export default IndexPage