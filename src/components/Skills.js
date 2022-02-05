import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiDjango, SiRubyonrails, SiHeroku, SiCircleci, SiTypescript, SiJest, SiMocha, SiCypress } from 'react-icons/si';
import { DiNodejs, DiMongodb, DiMysql, DiPython, DiJqueryLogo } from "react-icons/di";
import { GoGitBranch } from 'react-icons/go';

export default function Skills() {

    return (

        <div className="max-w-8xl mx-auto justify-center py-6" id='tech'>
            <p className="text-xl sm:text-2xl text-gray-900 pt-4 font-bold text-center">
                Tech / Skills
            </p>

            <div className='flex flex-wrap justify-center pt-2'>
                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <FaReact className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiJavascript className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>JavaScript</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiNodejs className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>NodeJS</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiMongodb className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>MongoDB</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiPostgresql className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>PostgreSQL</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiMysql className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>MySQL</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiPython className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Python</p>

                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiDjango className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Django</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiRubyonrails className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Ruby On Rails</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <DiJqueryLogo className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>jQuery</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <GoGitBranch className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Version Control</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiHeroku className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Heroku</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiCircleci className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>CI / CD</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiTypescript className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Typescript</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiJest className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Jest Testing</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiMocha className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Mocha-Chai testing </p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                    <SiCypress className='mx-auto text-6xl' />
                    <p className='mt-6 text-base sm:text-base font-semibold text-center'>Cypress E2E testing </p>
                </div>

            </div>
        </div>

    )
}