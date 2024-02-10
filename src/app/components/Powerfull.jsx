import Image from "next/image"
import Desktop from "@/app/img/Desktop.png"

export const Powerfull = () => {
    return (
        <div className="w-full p-20 flex items-center gap-20 max-lg:flex-wrap-reverse justify-center">
            <div className="w-3/6 flex flex-col items-start gap-4 max-lg:items-center">
                <h3 className="text-xl font-bold leading-[100%] tracking-[3px] text-white">POWERFUL</h3>
                <h2 className="text-[56px] leading-[110%] font-extrabold text-white max-lg:text-center">All the tools you <br /> can imagine</h2>
                <h4 className="text-lg font-normal leading-[160%] text-white max-lg:flex-wrap">
                Scelerisque auctor dolor diam tortor, fames faucibus <br />
                non interdum nunc. Ultrices nibh sapien elit gravida ac, <br />
                rutrum molestie adipiscing lacinia.
                </h4>
            </div>
            <div>
                <Image
                    src={Desktop}
                    width={800}
                />
            </div>
        </div>
    )
}