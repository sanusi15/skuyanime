import Link from 'next/link'

const Header = ({title, linkHref="", linkTitle=""}) => {
    return(
        <div className="mb-5 flex justify-between items-center">
        <h1 className="font-bold text-2xl">{title}</h1>
            <Link href={linkHref} className="underline text-indigo-500 hover:text-indigo-900">{linkTitle}</Link>
        </div>
    )
}

export default Header