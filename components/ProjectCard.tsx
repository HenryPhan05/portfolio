import Image from "next/image";
import { ProjectProps } from "@/app/constants/type";
import { FaCss3Alt, FaFigma, FaFire, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTeamFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpo, SiFramer, SiSupabase, SiTypescript, SiZod } from "react-icons/si";
import { TbApi, TbBulb, TbDeviceMobileCode } from "react-icons/tb";
import { IconType } from "react-icons";

const toolIcons: Record<string, IconType> = {
  TypeScript: SiTypescript, React: FaReact, "React Native": TbDeviceMobileCode,
  Tailwind: RiTailwindCssFill, "Next.js": RiNextjsFill, Supabase: SiSupabase,
  Firebase: FaFire, Expo: SiExpo, Zod: SiZod, Figma: FaFigma, TeamWork: RiTeamFill,
  Design: FaCss3Alt, "Creative Thinking": TbBulb, "Open Food Facts API": TbApi,
  "ExerciseDB API": TbApi, "Reponsive Design": TbDeviceMobileCode, Motion: SiFramer,
};

type ProjectCardProps = ProjectProps & { preview?: boolean };

const ProjectCard = ({ image, name, description, tools, icons, preview = false }: ProjectCardProps) => {
  const iconList = Array.isArray(icons) ? icons : [icons];

  return (
    <article className="group relative flex w-[min(82vw,430px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#09070f]/90 shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_40px_rgba(126,34,206,0.13)] backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/40">
      <div className="relative m-2.5 aspect-[16/9] overflow-hidden rounded-[20px] bg-white/5">
        <Image src={image} alt={`${name} project preview`} fill sizes="(max-width: 640px) 82vw, 430px" priority={name === "Fit Monkey"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09070f]/50 via-transparent to-transparent" />
      </div>

      <div className="flex min-h-[300px] flex-col px-6 pb-6 pt-3 sm:px-7">
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-white">{name}</h2>
          <p className="mt-2 min-h-12 text-sm leading-6 text-white/60 sm:text-[15px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2.5" aria-label="Tools used">
          {tools.map((tool) => {
            const ToolIcon = toolIcons[tool] ?? TbApi;
            return (
              <div key={tool} className="group/tool relative">
                <div tabIndex={preview ? -1 : 0} aria-label={tool} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.045] text-lg text-white/65 transition duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/15 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
                  <ToolIcon aria-hidden="true" />
                </div>
                <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-40 w-max max-w-44 -translate-x-1/2 translate-y-1 rounded-lg border border-white/10 bg-[#17101f] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition duration-150 group-hover/tool:translate-y-0 group-hover/tool:opacity-100 group-focus-within/tool:translate-y-0 group-focus-within/tool:opacity-100">{tool}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-white/[0.08] pt-5">
          {iconList.map((item) => {
            const Icon = item.icon;
            return (
              <a key={`${name}-${item.nameIcon}`} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`${name} ${item.nameIcon}`} title={item.nameIcon} tabIndex={preview ? -1 : 0} className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/75 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <Icon aria-hidden="true" />
              </a>
            );
          })}
          <span className="ml-auto text-[11px] font-medium tracking-[0.18em] text-white/30 uppercase">Explore</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
