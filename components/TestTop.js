import React from 'react'

export default function TestTop() {
    return (

        <div aria-label="group of cards" className="w-full">


            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
                {/* py-10 */}
                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center">
                    <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <img role="img" className="w-full h-full overflow-hidden object-cover rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png" alt="avatar" />
                    </div>
                    <a tabIndex="0" className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 dark:text-gray-100 cursor-pointer focus:underline"><h2 className=" text-xl tracking-normal font-medium mb-1">Timothy Jon Oliphant</h2></a>
                    <a tabIndex="0" className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                        <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="12" cy="11" r="3"></circle>
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>
                            </svg>
                        </span>
                        Las Vegas, Nevada
                    </a>
                    <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">The more I deal with the work as something that is my own, as something that is personal, the more successful it is.</p>
                    <div className="flex items-start">
                        <div className="">
                            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">82</h2>
                            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className=" dark:text-gray-100 text-sm leading-5">Reviews</p></a>
                        </div>
                        <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">28</h2>
                            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className=" dark:text-gray-100 text-sm leading-5">Projects</p></a>
                        </div>
                        <div className="">
                            <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">42</h2>
                            <a tabIndex="0" className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"><p className=" dark:text-gray-100 text-sm leading-5">Approved</p></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
