import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/app/libs/api";

const Page = async ({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `${decodedKeyword}`)
  return (
    <div className="px-4 py-2 bg-slate-100">
      <section>
      <Header title={`Hasil Pencarian ${decodedKeyword}`}/>
      <AnimeList api={searchAnime} />
      </section>
    </div>
  )
}

export default Page