import Navbar from "@/components/Navbar";


export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col dark:bg-dark-surface" >
      <Navbar />
      <main >{children}</main>
    </div>
  );
}
