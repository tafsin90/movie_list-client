
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#141414] text-white">
      <Navbar />
      <main className="w-full flex-1 py-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}