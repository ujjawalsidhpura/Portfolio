import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiDjango, SiRubyonrails, SiHeroku, SiCircleci, SiTypescript, SiJest, SiMocha, SiCypress } from 'react-icons/si';
import { DiNodejs, DiMongodb, DiMysql, DiPython, DiJqueryLogo } from "react-icons/di";
import { GoGitBranch } from 'react-icons/go';

export default function Skills() {

    return (

        <div className="max-w-8xl mx-auto justify-center py-6" id='tech'>
            <p className="text-base sm:text-2xl text-gray-900 pt-4 text-center ">
                Tech | Skills
            </p>

            <div className='flex flex-wrap justify-center pt-2'>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiJavascript color='#fde047' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>JavaScript</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaNodeJs color='#16a34a' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>NodeJS</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiPython color='#0284c7' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Python</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiRubyonrails color='#e11d48' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Ruby On Rails</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiTypescript color='#0ea5e9' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Typescript</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaReact color='#22d3ee' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiDjango color='#115e59' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Django</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiMongodb color='#22c55e' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>MongoDB</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiPostgresql color='#0891b2' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>PostgreSQL</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiMysql color='#f97316' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>MySQL</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiJqueryLogo color='#0284c7' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>jQuery</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <GoGitBranch className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Version Control</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiHeroku color='#d8b4fe' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Heroku</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaAws color='#f59e0b' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>AWS</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiCircleci className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>CI / CD</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiJest color='#ef4444' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Jest Testing</p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiMocha color='#a16207' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Mocha-Chai testing </p>
                </div>

                <div className='flex flex-col w-40 p-2 m-1 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiCypress color='#52525b' className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Cypress E2E testing </p>
                </div>
            </div>
        </div>

    )
}