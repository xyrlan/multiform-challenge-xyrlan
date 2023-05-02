import App from "./_app"
import { AppProps } from 'next/app'

export default function Home({ Component, pageProps }: AppProps) {
    return(
        <>
        <Component {...pageProps} />
        </>
    )
}