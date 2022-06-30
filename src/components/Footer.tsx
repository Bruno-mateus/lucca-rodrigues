import { AiFillInstagram } from 'react-icons/ai'

export function Footer() {
    return (
        <footer className="p-4 bg-black  dark:bg-zinc-800  text-2xl text-white flex items-center gap-1 absolute bottom-0 w-full" >

            <AiFillInstagram /> <span className='text-base '>/@rodri.lucca</span>

        </footer>
    )
}