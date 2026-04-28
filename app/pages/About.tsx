import ProfileCard from "@/components/ProfileCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import { ProfessionalCardLinks } from "../constants";
import { ProfessionalCardProps } from "../constants/type";
const About =() =>{
  return(
    <>
     <div
      className="min-h-screen flex flex-col gap-7 
     px-2 py-3
      xl:px-30 xl:py-10
      lg:px-24 lg:py-8
      md:px-12 md:py-6
      sm:px-12 sm:py-4
      ">
    <h1>
      About me
    </h1>

     <div
     className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-3 lg:justify-around">
      <div>
      <ProfileCard/>
      </div>
      <div className="flex flex-col line-clamp-6 max-w-xs text-center gap-5 text-sm font-medium">
      <p>I’m a junior software developer with a strong passion for building modern web and mobile applications. I enjoy turning ideas into real, interactive products and focus on creating smooth, user-friendly digital experiences.</p>
      <p>My work involves both frontend and backend development, along with exploring cross-platform mobile solutions, testing, and basic security practices. I like working across the full development process—from designing interfaces to implementing functionality and optimizing performance.</p>
      <p>I’m a fast learner who enjoys solving problems, adapting to new technologies, and collaborating with others. With a continuous drive to improve, I aim to build reliable and impactful software that delivers real value to users.</p>
      </div>
      <div className="flex flex-col gap-3">
        {ProfessionalCardLinks.map((card) =>(
            <ProfessionalCard key={card.id}  {...card} />   
      ))}
      </div>
      </div>
    </div>
    </>
  )
}
export default About;