import Link from "next/link";
import { FaFileCircleQuestion } from "react-icons/fa6";

const NotFound = () =>{
    return(
        <div className="bg-slate-300 min-h-screen w-full mx-auto flex justify-center items-center flex-col gap-5">
            <div className="flex justify-center items-center gap-3">
                <FaFileCircleQuestion size={45}/>
                <h3 className="text-2xl">Not Found</h3>
            </div>
            <div className="flex justify-center items-center bg-amber-500 py-2 px-4 rounded-md hover:bg-slate-600">
                <Link href="/" className="text-slate-900 hover:text-white text-sm underline ">Kembali</Link>
            </div>
        </div>
    )
}

export default NotFound