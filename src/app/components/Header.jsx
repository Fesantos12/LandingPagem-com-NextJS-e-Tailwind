

export const Header = () => {
    return (
        <div className="w-full h-36 px-20 py-6 flex justify-center items-center bg-sky-950">
            <header className="w-4/5 h-full py-6 px-6 flex justify-between items-center rounded-3xl bg-gray-900 shadow-2xl">
                <div className="flex gap-10 items-center">
                    <div className="text-white font-bold text-3xl leading-9 cursor-pointer transition-colors hover:text-gray-500">
                        Weeb
                    </div>

                    <div className="flex items-center gap-4 max-lg:hidden">
                        <a href="" className="text-white text-base hover:text-gray-500 transition-colors font-medium leading-6 tracking-tighter">About</a>
                        <a href="" className="text-white text-base hover:text-gray-500 transition-colors font-medium leading-6 tracking-tighter">Soluctions</a>
                        <a href="" className="text-white text-base hover:text-gray-500 transition-colors font-medium leading-6 tracking-tighter">Pricing</a>
                        <a href="" className="text-white text-base hover:text-gray-500 transition-colors font-medium leading-6 tracking-tighter">Resources</a>
                    </div>
                </div>

                <div className="w-full h-full flex items-center justify-end gap-4 pr-4 max-[560px]:hidden">
                    <a href="" className="text-white text-base hover:text-gray-500 transition-colors font-medium leading-6 tracking-tighter">Log in</a>
                    <button className="p-3 bg-violet-600 rounded-lg text-white text-base transition-colors font-medium leading-6 tracking-tighter hover:bg-violet-800">Join Now</button>
                </div>
            </header>
        </div>
    )   
}