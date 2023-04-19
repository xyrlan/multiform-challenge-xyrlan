export default function Sidebar() {
    return(
        <div className="bg-bg-sidebar-desktop bg-black rounded-3xl w-[30%] h-full" >
                <ul className="flex flex-col gap-6 pt-10 ml-5">
                    <li className="inline-flex gap-2">
                    <button className="rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90">1</button>
                    <p className="flex flex-col">
                        <a>Step 1</a>
                        <a>Your info</a>
                    </p>
                    </li>
                    <li className="inline-flex gap-2">
                    <button className="rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90">2</button>
                    <p className="flex flex-col">
                        <a>Step 2</a>
                        <a>Select plan</a>
                    </p>
                    </li>
                    <li className="inline-flex gap-2">
                        <button className="rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90">3</button>
                    <p className="flex flex-col">
                        <a>Step 3</a>
                        <a>Add-ons</a>
                    </p>
                    </li>
                    <li className="inline-flex gap-2">
                    <button className="rounded-full w-12 mx-4 text-lg bg-transparent text-white border-white border-solid border-2 scale-90">4</button>
                    <p className="flex flex-col">
                        <a>Step 4</a>
                        <a>Summary</a>
                    </p>
                    </li>
                </ul>
            </div>
    )
}