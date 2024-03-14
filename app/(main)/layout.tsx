import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Applayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="h-full">
            <Sidebar />

            <div className="pl-[60px] h-full">
                <div className="h-full flex-1">
                    <Navbar />

                    {children}
                </div>
            </div>
        </main>
    );
}
