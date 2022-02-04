import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

export default function Footer() {

    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4 ">

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
    )
}