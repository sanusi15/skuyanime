import Link from 'next/link'
import InputSearch from './InputSearch'
const Navbar = () => {
    return(
        <header className="bg-slate-700 ">
            <div className='flex md:flex-row flex-col justify-between items-center p-4 gap-2'>
                <Link href="/" className='text-white font-bold text-2xl hover:scale-105 transition-all'>ANIMESKUY</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar