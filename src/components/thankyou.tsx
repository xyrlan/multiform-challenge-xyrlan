import Image from "next/image"

export default function Thankyou({data}) {

    const firstName = data.name.split(' ')[0];
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    return(
        <>
        <main className='flex flex-col items-center text-center text-[#02295a] md:pt-10 lg:px-10 xl:px-24 max-lg:px-10 md:px-4 max-md:justify-center max-md:pt-6 max-md:px-4 max-md:w-full w-full max-sm:pb-5'>

            <Image src="./images/icon-thank-you.svg" width={80} height={80} alt="ThankYou" />
            <h1 className="mt-10 mb-5 text-4xl font-bold">Thank you, <span className="text-[#473dff]">{capitalizedFirstName}</span>!</h1>
            <p className="text-center text-gray-400"> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </main>
        </>
    )
}
