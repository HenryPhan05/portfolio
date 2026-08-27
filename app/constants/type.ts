
import { StaticImageData } from "next/image"
import { IconType } from "react-icons"
export type Navigation={
  id:number,
  name:string,
  href: string,
}
export type SocialIcons={
  id:number,
  nameIcon:string,
  icon: IconType,
  href: string,
}
export type ProfessionalCardProps={
  id: number,
  name: string,
  description: string,
  icon: IconType,
}
export type DescriptionProps={
  id:number,
  description: string,
}
type ProjectIcons= {
  nameIcon:string,
  icon:IconType,
  link: string,
}
export type ProjectProps={
  id: number,
  name: string,
  description: string,
  period?: string,
  tools: Array<string>,
  icons : ProjectIcons[] | ProjectIcons;
  image: StaticImageData,
}
export type IConProps ={
  className?:string ,

}
