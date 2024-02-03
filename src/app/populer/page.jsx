'use client'

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/headerMenu"
import Pagination from "@/components/Utilities/pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../libs/api"

const Populer = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    } 

    useEffect(()=> {
        fetchData()
    }, [page])

    return(
        <div className="px-4 py-2">
            <HeaderMenu title={`paling populer #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination page={page} lastPage={topAnime?.pagination?.last_visible_page} setPage={setPage} />
        </div>
    )
}

export default Populer