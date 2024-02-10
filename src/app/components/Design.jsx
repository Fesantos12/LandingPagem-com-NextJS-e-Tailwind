import { Dbanner } from "@/app/components/Dbanner"
import Dektop from "@/app/img/Desktop.png"
import Image from "next/image"


export const Design = () => {
    return (
        <div className="w-full h-screen bg-sky-950 flex flex-col gap-20 items-center justify-center mt-32">
            <Dbanner/>
            <Image
                src={Dektop}
                alt="Uma imagem de um Desktop"
                width={700}
                height={400}
            />
        </div>
    )
}