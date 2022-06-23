import { AiFillInstagram} from 'react-icons/ai'

export function Footer(){
    return(
        <footer className="p-6 bg-black text-2xl text-white flex items-center gap-1" >
           
               <AiFillInstagram/> <span className='text-base'>/@rodri.lucca</span>
            
        </footer>
    )
}