import Image from "next/image";
import Youtube from "@/app/img/youtube.png"
import Facebook from "@/app/img/facebook2.jpg"
import Instagram from "@/app/img/instagram.png"
import Twitter from "@/app/img/twitter.png"
import Linkedin from "@/app/img/linkedin.png"

export const Footerbaixo = () => {
    return (
        <div className="w-full py-12 flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6">
            <div>
                @ 2023 Weeb, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
                <Image
                    src={Youtube}
                    width={24}
                    height={24}
                />
                <Image
                    src={Facebook}
                    width={24}
                    height={24}
                />
                <Image
                    src={Twitter}
                    width={24}
                    height={24}
                />
                <Image
                    src={Instagram}
                    width={24}
                    height={24}
                />
                <Image
                    src={Linkedin}
                    width={24}
                    height={24}
                />
            </div>
        </div>
    );
}