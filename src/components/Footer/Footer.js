import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className=" p-4 bg-white sm:p-6 bg-gradient-to-r from-[#388AF3] to-[#A483E2]">
                <div className='md:p-1'>
                    <div className='pb-12 lg:hidden'>
                        <h1 className='text-white text-4xl font-bold sm:hidden md:block'>toimo</h1>
                    </div>
                    <div className="md:flex md:justify-between ">
                        <div className="mb-6 md:hidden lg:block">
                            <a href="#" className="flex items-center">
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:hidden lg:block">LOGO</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 sm:gap-6 sm:grid-cols-1">
                            <div>
                                <div className="flex items-center">
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Услуги</h2>
                                    <div className="bg-white rounded-full h-1 w-1 mb-6 ml-1"/>
                                </div>
                                <ul className="text-white dark:text-white">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Support and development</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline">UI/UX and product design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Progressive Web Applications (PWA)</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='pl-16 md:p-0 sm:px-0 sm:py-12'>
                                <div className="flex items-center">
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Компания</h2>
                                    <div className="bg-white rounded-full h-1 w-1 mb-6 ml-1"/>
                                </div>
                                <ul className="text-white dark:text-white">
                                    <li className="mb-4">
                                        <h2>О компании</h2>
                                    </li>
                                    <li className='mb-4'>
                                        <h2>Проекты</h2>
                                    </li>
                                    <li>
                                        <h2>Контакты</h2>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <div className="flex items-center">
                                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Контакты</h2>
                                        <div className="bg-white rounded-full h-1 w-1 mb-6 ml-1"/>
                                    </div>
                                    <ul className="text-white dark:text-white">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Скачать презентацию</a>
                                        </li>
                                        <li className='mb-4'>
                                            <span>+7 (499) 999-99-99</span>
                                        </li>
                                        <li>
                                            <span>info@site.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-4'>
                                    <img src="https://static.tildacdn.com/tild3364-3439-4233-b638-633030623666/whatsapp_PNG13_1.png"
                                         alt="whatsapp"
                                         width={30}
                                         height={30}
                                         className='mb-4'
                                    />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/800px-Telegram_Messenger.png"
                                         alt="telegram"
                                         width={30}
                                         height={30}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 md:flex md:md:justify-between sm:block">
                    <span className="text-xs text-white sm:text-center dark:text-white">
                        © Company 2022. All rights reserved.
                    </span>
                        <div className="flex mt-4 space-x-6  sm:mt-0">
                            <h2 className='text-white text-xs'>
                                Политика конфиденциальночти
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;