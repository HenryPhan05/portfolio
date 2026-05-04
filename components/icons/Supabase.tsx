import { IConProps } from "@/app/constants/type";
const SupabaseIcon =({className} : IConProps) =>{
  return(
        
        <svg
        className={className}
         xmlns="http://www.w3.org/2000/svg" fill="none" 
         viewBox="0 0 600 600">
          <title>Supabase</title>
          <path fill="url(#devicon-supabase-icon-2-a)" d="M349.3 590a26.2 26.2 0 0 1-46.8-15.9l-5.4-360.5h242.4a52.5 52.5 0 0 1 41.1 85.1z"/><path fill="url(#devicon-supabase-icon-3-b)" fillOpacity=".2" d="M349.3 590a26.2 26.2 0 0 1-46.8-15.9l-5.4-360.5h242.4a52.5 52.5 0 0 1 41.1 85.1z"/><path fill="#3ECF8E" d="M250.7 10a26.2 26.2 0 0 1 46.8 15.9l2.4 360.5H60.5c-44 0-68.4-50.7-41.1-85.1z"/><defs><linearGradient id="devicon-supabase-icon-2-a" x1="6450.5" x2="20349.7" y1="8206.6" y2="14035.9" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient><linearGradient id="devicon-supabase-icon-3-b" x1="884.4" x2="9807" y1="-4870.5" y2="11925.8" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stopOpacity="0"/></linearGradient></defs></svg>
              
  )
}
export default SupabaseIcon;