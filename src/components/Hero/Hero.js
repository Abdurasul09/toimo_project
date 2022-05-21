import React from 'react';
import {TelegramIcon} from "../../utils/icons";

const Hero = () => {
    return (
        <div className='container mt-16 flex items-center justify-around md:block sm:block'>
            <div>
                <div className='pb-12'>
                    <span className='text-gray-500'>Главное - </span>
                    <span>Контакты</span>
                </div>
                <div className='mt-4'>
                    <h1 className='text-6xl font-bold text-blue-700'>
                        Мы рядом
                    </h1>
                    <p className='max-w-sm mt-4 text-xs'>
                        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту
                        <span className='text-blue-700 pl-4'>info@site.com</span>
                    </p>
                </div>
                <div className='mt-10 border-b py-12 max-w-sm' >
                    <div>
                        <input
                            type="text"
                            placeholder='Ваше имя *'
                            className="appearance-none bg-transparent border-b w-xs text-gray-700 mr-3 py-1  leading-tight focus:outline-none"

                        />
                        <input
                            className="appearance-none bg-transparent border-b w-xs text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                            type="text"
                            placeholder='Ваше E-Mail *'
                        />
                    </div>
                    <div className='mt-6'>
                        <input
                            className="appearance-none bg-transparent pb-6 border-b w-xs text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                            type="text" placeholder='Комментарий *'  aria-label="Full name"
                        />
                    </div>
                </div>
                <div className='mt-4 text-xs flex items-center'>
                    <input type="radio"/>
                    <span className='pl-1'>Согласен с</span>
                    <span className=' px-4 text-blue-700'>Политикой конфиденциальности</span>
                </div>
            </div>
            <div className="rounded-full w-32 h-32  mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#388AF3] via-[#A483E2] to-[#A483E2] md:mx-0">
                <div className="flex flex-col justify-center h-full bg-white rounded-full p-4">
                    <div className='pl-4'>
                        <TelegramIcon/>
                    </div>
                    <h1 className=' text-transparent  bg-clip-text bg-gradient-to-r from-[#388AF3] to-[#A483E2]'>Отправить</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;