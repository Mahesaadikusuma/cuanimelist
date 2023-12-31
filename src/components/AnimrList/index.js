import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
     return(
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
               {api.data.map((anime) => {
                    return (
                    <Link href={`/${anime.mal_id}`} className="cursor-pointer"> 
                         <Image src={anime.images.webp.large_image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
                         <h1 className="font-bold text-base  md:text-lg  p-4">{anime.title}</h1>
                    </Link>
                    )
               })}
               
          </div>
          
     )
}

export default AnimeList