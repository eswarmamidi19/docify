import { cn } from "@/lib/utils";
import localFont from "next/font/local";
const customFont = localFont({
  src: "../../../../../../public/fonts/font.woff2",
});

export default function certificatePage(){
     return <div className="w-100 h-full  flex flex-col gap-y-2">
     {/* Heading */}
     <div className={cn(customFont.className, "text-2xl md:text-4xl")}>
       Certificate Page
     </div>

     {/* Form and Preview */}
     <div className="h-full">
            Form
     </div>
   </div>
}