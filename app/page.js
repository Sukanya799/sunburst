import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-auto bg-white">
     <Navbar />
      <Hero />
    </main>
  );
}
