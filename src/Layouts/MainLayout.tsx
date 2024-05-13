import { Outlet } from 'react-router-dom';
import Header from '@/Components/Header';
import LeftSidebar from '@/Components/LeftSidebar';
import Footer from '@/Components/Footer';

type Props = {}

function MainLayout({ }: Props) {
    return (
        <>
            <div className="index-page flex flex-col items-center justify-center min-h-screen">
                <div className="max-h-[900px] h-[70vh] w-[1200px] max-w-[1400px] border-2 border-transparent flex flex-col items-center justify-center">
                    <Header />
                    <div>
                        <div className="z-20 absolute ml-[-48px] top-1/3">
                            <LeftSidebar />
                        </div>
                        <div className="max-h-[860px] h-[60vh] w-[1100px] max-w-[1300px] border-2 border-gray-900 rounded-xl flex items-center justify-center p-3 overflow-auto">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout