import Image from "next/image"
import Artventure from "@/app/img/Artventure.png"
import Shels from "@/app/img/Shels.png"
import SmartFinder from "@/app/img/SmartFinder.png"
import Waves from "@/app/img/Waves.png"
import Zoomer from "@/app/img/Zoomer.png"


export const Leading = () => {
    return (
        <div className="p-20 flex flex-col items-center gap-20">
            <h2 className="w-full flex items-center justify-center text-center text-6xl font-extrabold leading-[61px] text-white">Join Leading Companies</h2>
            <div className="flex items-center gap-20 max-lg:flex-wrap justify-center">
                <div className="flex items-center gap-2">
                    <Image
                        src={SmartFinder}
                        width={32}
                        height={32}
                    />
                    <span className="text-2xl font-bold leading-7 text-white">SmartFinder</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Zoomer}
                        width={32}
                        height={32}
                    />
                    <span className="text-2xl font-bold leading-7 text-white">Zoomerr</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Shels}
                        width={32}
                        height={32}
                    />
                    <span className="text-2xl font-bold leading-7 text-white">SHELLS</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Waves}
                        width={32}
                        height={32}
                    />
                    <span className="text-2xl font-bold leading-7 text-white">WAVES</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={Artventure}
                        width={32}
                        height={32}
                    />
                    <span className="text-2xl font-bold leading-7 text-white">ArtVenue</span>
                </div>
            </div>
        </div>
    )
}