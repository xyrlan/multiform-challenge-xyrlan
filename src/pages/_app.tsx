import '../styles/globals.css'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'




export default function App({ Component, pageProps }) {



  return( 
    <>
    <Head>
    
    
    <title>Frontend Mentor | Multi-step form</title>
      </Head>
  
  
  <main className="font-ubuntu flex h-screen justify-center items-center p-16 bg-[#bfe2fd]">
        <div className='bg-white w-[70%] h-[95%] rounded-3xl p-3 flex'>
          <Layout>
          
          </Layout>
          <div className='bg-white w-[70%]'>
          <Component {...pageProps} />
          </div>
        </div>
        
        
      
    </main>
  </>
)}
