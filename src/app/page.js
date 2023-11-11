import AnimeList from "@/components/AnimrList"
import Link from "next/link"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  // console.log(anime)
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="text-base underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <AnimeList api={topAnime} />
    </div>
  )
}

export default Home


/* {anime.data?.map(data => {
  // console.log(data.title)
  return (
    <div key={data.mal_id} className="shadow-xl">
      <AnimeList title={data.title} images={data.images.webp.large_image_url} id={data.mal_id}/>
    </div>
  )
})} */