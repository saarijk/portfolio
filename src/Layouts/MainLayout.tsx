import { Outlet } from 'react-router-dom';
import Header from '@/Components/Header';
import LeftSidebar from '@/Components/LeftSidebar';
import Footer from '@/Components/Footer';

type Props = {}

function MainLayout({ }: Props) {
    return (
        <>
            <div className="index-page">
                <Header />
                <LeftSidebar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default MainLayout