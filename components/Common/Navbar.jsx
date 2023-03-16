import Link from "next/link";
const Navbar = () => {
    return (


        <nav className="z-50 p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> */}
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Profile Builder</span>
                </a>
                <Link href="/">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">

                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Home
                        </span>
                    </button>
                </Link>
            </div>
        </nav>



    );
}

export default Navbar;