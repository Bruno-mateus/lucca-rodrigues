import { AiFillInstagram } from 'react-icons/ai'

export function Footer() {
    return (
        <footer className="p-4 bg-black  dark:bg-zinc-800   text-white w-full" >

            <a href={"https://www.instagram.com/rodri.lucca/"} className="flex items-center gap-1 text-2xl" target="_blank"><AiFillInstagram /> <span className='text-base '>/@rodri.lucca</span></a>

        </footer>
    )
}
