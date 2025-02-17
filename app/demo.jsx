import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./common/header";

const montserrat = Montserrat({
    weight: ["400", "700"], // Specify the font weights you need
    subsets: ["latin"],
    variable: "--font-montserrat", // Updated variable name
});

const poppins = Poppins({
    weight: ["400", "700"], // Specify the font weights you need
    subsets: ["latin"],
    variable: "--font-poppins", // Updated variable name
});

export const metadata = {
    title: "LancheAI",
    description: "Experience the FUTURE of AI-Powered Crypto Management",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${poppins.variable} bg-[#1E1E1E]`}>
                <Header />
                <div className="gradient-text">
                    {children}
                </div>
            </body>
        </html>
    );
}