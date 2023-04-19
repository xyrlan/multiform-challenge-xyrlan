import Image from "next/image"
import { images } from "../../next.config"
import Sidebar from "./Sidebar"

export default function Layout ({children}) {
    return(
        <>
        
            <Sidebar/>

            <main className="">{children}
            </main>
            
        
        </>
    )
}