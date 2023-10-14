import BottomNavbar from "@/components/ui/BottomNavbar"
import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
                <BottomNavbar />
            </body>
        </html>
    )
}