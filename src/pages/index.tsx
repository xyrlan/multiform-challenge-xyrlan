import { Children } from "react"
import App from "./_app"
import { AppProps } from 'next/app'

export default function Home({children}) {
    return(
        <div>
            {children}
        </div>

    )
}