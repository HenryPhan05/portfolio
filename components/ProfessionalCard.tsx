import { ProfessionalCardProps } from "@/app/constants/type";

const ProfessionalCard = ({ name, description, icon: Icon }: ProfessionalCardProps) => {
  return (
    <div
      className="
        flex flex-row gap-4 p-4 rounded-2xl w-full

        bg-black/80
        backdrop-blur-xl

        border border-purple-600/40
        shadow-[0_0_20px_rgba(168,85,247,0.25)]

        hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]

        transition-all duration-300
        hover:scale-[1.03]
      "
    >
     
      <div className="flex items-center justify-center text-white">
        <Icon className="text-3xl lg:text-5xl" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h1 className="text-purple-600 font-semibold text-lg">
          {name}
        </h1>
        <p className="text-shadow-white text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProfessionalCard;