"use client"
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (e) =>{
        const keyword = searchRef.current.value
        if(!keyword) return
        if(e.key === 'Enter' || e.type === 'click'){
            e.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    return(
        <div className="bg-white px-2 py-2 rounded-md md:w-64 w-full flex justify-between">
            <input placeholder='Cari anime..' className='outline-none' onKeyDown={handleSearch} ref={searchRef} />
            <button onClick={handleSearch}>
                <FiSearch />
            </button>
        </div>
    )
}
export default InputSearch