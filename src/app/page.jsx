import Header from "@/components/AnimeList/header";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "./libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8')
  return (
    <div className="px-4 py-2 bg-slate-100">
      <section>
      <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
      <AnimeList api={topAnime} />
      </section>
    </div>
  )
}

export default Page