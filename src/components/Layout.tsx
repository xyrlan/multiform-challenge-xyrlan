import Image from "next/image"
import { images } from "../../next.config"
import Sidebar from "./Sidebar.tsx"

export default function Layout ({children}) {
    return(
        <>
        
            <Sidebar/>

            <main className="">{children}
            </main>
            
        
        </>
    )
}