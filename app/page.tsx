import NavBar from "@/components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
export default function Home() {
  return (
    <div
      className="min-h-screen text-white
                 bg-black
                 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      <NavBar />

      <main className="relative
      pt-8 px-3 
      lg:pt-28 lg:px-10
      md:pt-20 md:px-8
      sm:pt-12 sm:px-5 
       ">
     
          <Hero />
      
       
          <About />
       
      </main>
    </div>
  );
}