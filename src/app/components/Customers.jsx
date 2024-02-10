import Image from "next/image"
import ArrowRight from "@/app/img/arrow-right.png"
import Shapesquadrado from "@/app/img/Shapes-quadrado.png"


export const Customers = () => {
    return (
        <div className="w-full p-20 flex items-center gap-20 max-lg:flex-wrap-reverse">
            <div className="w-full flex flex-col items-start gap-6 max-lg:items-center">
                <h3 className="w-full flex justify-start items-center text-xl text-white font-bold leading-[100%] tracking-widest max-lg:justify-center">CUSTOMERS</h3>
                <h2 className="w-full flex justify-start items-center flex-wrap gap-2 text-5xl leading-[110%] font-extrabold text-white max-lg:justify-center"><span className="text-violet-400">Target</span> <div className="bg-pink-700">Customers</div> with <br /> our powerful AI kit</h2>
                <h4 className="w-full justify-start items-center font-normal leading-[160%] text-white max-lg:text-center">
                    Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. <br />
                    Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
                </h4>
                <a href="" className="flex items-center gap-4 text-xl font-medium leading-6 tracking-widest text-white hover:text-gray-400 transition-colors">
                    How Targeting Customers Works
                    <Image 
                        src={ArrowRight}
                        width={24}
                    />
                </a>
            </div>
            <div className="w-full flex items-center justify-center">
                <Image
                    src={Shapesquadrado}
                    width={375}
                />
            </div>
        </div>
    )
}