import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./common/header";

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
        <html lang="en">
            <body className={`${poppins.variable} bg-gradient`}>
                    <Header />
                    {children}
            </body>
        </html>
    );
}