import myPicture from '../images/myPicture.jpeg'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaEvernote } from 'react-icons/fa';

export default function Card() {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                <div className="">
                    <img src={myPicture} alt="profile"
                        className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" />
                </div>
                <div className='text-center mt-5'>
                    <p className='text-xl sm:text-2xl text-gray-900 '>
                        Ujay Sidhpura
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                        Full-Stack Developer
                    </p>

                    <div className='flex align-center justify-center mt-4'>
                        <a className='text-xl m-1 p-1 sm:p-2 text-gray-700 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='https://github.com/ujjawalsidhpura'>
                            <FaGithub />
                            <span className='sr-only'>Github</span>
                        </a>

                        <a className='text-xl m-1 p-1 sm:p-2 text-blue-700 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/ujjawalsidhpura/'>
                            <FaLinkedin />
                            <span className='sr-only'>LinkedIn</span>
                        </a>

                        <a className='text-xl m-1 p-1 sm:p-2 text-green-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='https://medium.com/@ujjawalsidhpura'>
                            <FaMedium />
                            <span className='sr-only'>Medium</span>
                        </a>

                        <a className='text-xl m-1 p-1 sm:p-2 text-red-600 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='mailto:ujjawalsidhpura@gmail.com'>
                            <FaEnvelope />
                            <span className='sr-only'>Mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
