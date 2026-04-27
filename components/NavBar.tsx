import { navLinks } from "@/app/constants";

const NavBar = () => {
  return (
    <div
      className="flex flex-row justify-between items-center
                 px-16 py-6
                 bg-black/80 backdrop-blur-md
                 border-b border-white/10
                 text-white fixed top-0 left-0 w-full z-50"
    >
      {/* Icon */}
      <h1 className="text-2xl font-bold tracking-wide text-white">
        Henry
      </h1>

      {/* Navigation button*/}
      <div className="flex flex-row gap-10">
        {navLinks.map((item) => (
          <div
            key={item.id}
            className="text-xl font-medium text-gray-300 hover:text-purple-400 hover:-translate-y-1 hover:scale-105 transition duration-200  cursor-pointer"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* subtle glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
};

export default NavBar;