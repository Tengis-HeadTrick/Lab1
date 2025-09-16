import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children=0 }: { 
children: React.ReactNode }) {
return (
<div className="min-h-screen flex flex-col">
<Header />
<main className="flex-grow container mx-auto p-6">{children}</main>
<Footer />
  </div>
  );
}
