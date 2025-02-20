'use client'
import { Poppins } from "next/font/google";
import BottomNavigation from "../common/bottomNavigation";
import SideNavigation from "../common/sideNavigation";
import DashboardHeader from "../common/dashboardHeader";

const poppins = Poppins({
    weight: ['400', '600', '700'],  
    subsets: ['latin'],
});

export default function DashboardLayout({ children }) {
    return (
        <div className={`${poppins.className} min-h-screen bg-[#222] flex`}>
            <SideNavigation />
            <BottomNavigation />
            
            <div className="flex-1 flex flex-col md:ml-64">
                <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6">
                    <DashboardHeader />
                    {children}
                </main>
            </div>
        </div>
    );
}