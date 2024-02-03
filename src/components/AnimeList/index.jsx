import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {
                api.data?.map((anime) => {
                    return(
                        <div key={anime.mal_id} className="bg-white shadow-lg shadow-indigo-200 rounded-md overflow-hidden cursor-pointer mb-2 md:h-[450px] h-[250px] relative">
                            <Link href={`/anime/${anime.mal_id}`} >
                                <Image id="imageList" src={anime.images.webp.large_image_url} alt="" width={350} height={350} className="hover:scale-105 rounded-md" />
                                <div className="px-2 py-1 flex justify-between absolute bottom-0 h-24 w-full bg-blue-800 bg-opacity-20 backdrop-filter backdrop-blur-md">
                                    <div className=" w-2/3">
                                        <p className="text-white font-bold lg:text-lg text-sm">{anime.title_english}</p>
                                    </div>
                                    <div className="text-yellow-400 font-bold text-sm text-right flex gap-1">
                                        <span>
                                            <Image src="/images/start.png" className="imgStart" width={10} height={10} alt=""/>
                                        </span>
                                        {anime.score}            
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AnimeList