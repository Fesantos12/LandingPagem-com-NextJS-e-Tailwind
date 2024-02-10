import Image from "next/image"
import ArrowRightRoxo from "@/app/img/arrow-right-roxo.png"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"


export const Events = () => {
    return (
        <div className="w-full p-20 flex flex-col gap-6 bg-white max-lg:gap-6">
            <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:text-center max-lg:gap-8">
                <h2 className="text-[56px] font-extrabold leading-[110%] text-gray-900">Design events near your</h2>
                <a href="" className="flex items-center justify-start gap-4 text-xl font-medium leading-6 tracking-widest text-purple-600 hover:text-purple-800 transition-colors max-lg:justify-center">
                    View Case Study
                    <Image 
                        src={ArrowRightRoxo}
                        width={24}
                    />
                </a>
            </div>
            <div className="w-full flex items-center gap-6 max-lg:flex-col max-lg:justify-center">
                <Section1/>
                <Section2/>
                <Section3/>
            </div>
        </div>
    )
}