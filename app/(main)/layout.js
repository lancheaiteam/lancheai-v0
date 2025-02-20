import { Poppins } from "next/font/google";
import Header from "../common/header";
import '../globals.css'

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "LancheAI",
    description: "Experience the FUTURE of AI-Powered Crypto Management",
};

export default function RootLayout({ children }) {
    return (
        <div className={`${poppins.variable} bg-gradient`}>
            <Header />
            {children}
        </div>
    );
}