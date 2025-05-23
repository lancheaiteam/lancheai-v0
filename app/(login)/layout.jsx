import { Poppins } from "next/font/google";
import '../globals.css'

const poppins = Poppins({
    weight: ['400', '600', '700'],  
    subsets: ['latin'],
});

export const metadata = {
    title: "LancheAI",
    description: "Experience the FUTURE of AI-Powered Crypto Management",
};

export default function DahboardLayout({ children }) {
    return (
        <div className={`${poppins.variable} bg-gradient`}>
            {children}
        </div>
    );
}