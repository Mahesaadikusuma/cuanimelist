import Link from "next/link"

const Navbar = () => {
     return(
          <div>
               <header className="bg-indigo-500">
                    
                    <div className="flex justify-between p-4 md:flex-row flex-col gap-2"> 
                         <Link href="/" className="font-bold text-white text-2xl" >CuyAnimeList </Link>
                         <input type="search"  name="" placeholder="cari anime..." defaultValue=""/>
                    </div>

               </header>
          </div>
     )
}

export default Navbar