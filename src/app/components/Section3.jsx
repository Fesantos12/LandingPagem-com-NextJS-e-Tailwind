import Image from "next/image"
import ArrowRightRoxo from "@/app/img/arrow-right-roxo.png"
import Picture3 from "@/app/img/Picture3.png"

export const Section3 = () => {
    return (
        <div className="w-full flex flex-col items-start gap-6 max-lg:items-center">
            <div className="w-full h-[220px] flex items-start justify-start max-lg:justify-center">
                <Image
                    className="relative"
                    src={Picture3}
                    width={410}
                    height={220}
                />
                <div className="absolute mt-3 ml-3 px-1 py-2 bg-purple-100 rounded text-sm font-normal leading-[140%] text-purple-800">Bootcamp</div>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-base font-normal leading-[110%] text-gray-900">Bootcamp</h4>
                <h2 className="text-[40px] font-bold leading-[110%] text-gray-900">Happy Father's Day</h2>
            </div>
            <a href="" className="flex items-center justify-start gap-4 text-xl font-medium leading-6 tracking-[0.5px] text-purple-600 hover:text-purple-800 transition-colors max-lg:justify-center">
                    Buy Tickets
                    <Image
                        src={ArrowRightRoxo}
                        width={24}
                    />
                </a>
        </div>
    )
}