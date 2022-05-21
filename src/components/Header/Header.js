import React from 'react';
import {ArrowRight} from "../../utils/icons";

const Header = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-6  dark:bg-white">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">LOGO</span>
                    </a>
                    <div className="flex md:order-2">
                        <div className="hidden relative md:block">
                            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                       aria-current="page">RU</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >EN</a>
                                </li>
                                <li className='flex items-center relative'>
                                    <a href="#"
                                       className="block py-2 mr-10 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
                                    >НАЧАТЬ ПРОЕКТ</a>
                                    <span className='border p-3 rounded-full absolute right-0'>
                                        <ArrowRight/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-3" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none   "
                                aria-controls="mobile-menu-3" aria-expanded="false">
                            <svg className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="19" cy="12" r="1"/>
                                <circle cx="5" cy="12" r="1"/>
                            </svg>
                            <svg className="hidden h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="19" cy="12" r="1"/>
                                <circle cx="5" cy="12" r="1"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden flex justify-between items-center w-full lg:flex lg:justify-between md:flex md:w-auto md:order-1"
                         id="mobile-menu-3">
                        <ul className="flex  m-4 lg:block lg:flex lg:justify-between md:hidden">
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                   aria-current="page">Проекты</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b mx-6 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">О компании</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;