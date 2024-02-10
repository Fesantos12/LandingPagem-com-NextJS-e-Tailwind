
export const Dbanner = () => {
    return (
        <div className="w-11/12 h-64 flex flex-col items-center gap-8">
            <h1 className="text-center text-7xl font-extrabold leading-10 text-white max-lg:text-5xl">Design Faster <span className="text-purple-800">&</span> Better</h1>
            <h4 className="text-sm text-center font-normal leading-7 text-white shadow-none">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br /> Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</h4>
            <div className="flex items-center gap-4">
                <button className="p-4  bg-violet-600 rounded-lg text-white text-xl transition-colors font-medium leading-3 tracking-tighter hover:bg-violet-800">Join Now</button>
                <button className="p-4 bg-transparent border-2 border-white rounded-lg text-xl text-white font-medium leading-3 hover:bg-gray-400 transition-colors">View Demo</button>
            </div>
        </div>
    )
}