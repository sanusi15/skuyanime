import { getAnimeResponse } from "@/app/libs/api"
import { GiBackwardTime } from "react-icons/gi";

const Page = async ({params: {id}}) => {
    const {data} = await getAnimeResponse(`anime/${id}`)
    console.log(data)
    return(
        <div className="py-2 px-4">
            <h3 className="text-2xl">{data.title_english} -  {data.year}</h3>
            <div className="flex gap-2">
                <div className="w-36 p-2 flex flex-col items-center border-2 bg-slate-700 text-white rounded-md">
                    <h3>PERINGKAT</h3>
                    <p>{data.rank}</p>
                </div>
                <div className="w-36 p-2 flex flex-col items-center border-2 bg-slate-700 text-white rounded-md">
                    <h3>SKOR</h3>
                    <p>{data.score}</p>
                </div>
                <div className="w-36 p-2 flex flex-col items-center border-2 bg-slate-700 text-white rounded-md">
                    <h3>POPULARITAS</h3>
                    <p>{data.popularity}</p>
                </div>
                <div className="w-36 p-2 flex flex-col items-center border-2 bg-slate-700 text-white rounded-md">
                    <h3>POPULARITAS</h3>
                    <p>{data.popularity}</p>
                </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-5">
                <div className="w-full sm:w-1/2">
                    <img src={data.images.webp.large_image_url} alt={data.images.webp.large_image_url} className="rounded-md w-full" />
                    <div className="flex items-center gap-2 mt-2 font-bold">
                        <GiBackwardTime/>
                        {data.duration}
                    </div>
                </div>
                <div className="">
                    <p>{data.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default Page