import myPicture from '../images/myPicture.jpeg'

export default function Projects() {

    const handleClick = () => {
        alert('clicked')
    }

    return (

        <div className="max-w-8xl mx-auto justify-center py-6" id='tech'>
            <p className="text-base sm:text-2xl text-gray-900 pt-4  text-center">
                Projects
            </p>

            <div className='flex flex-wrap justify-center pt-2'>

                <div className="m-2 w-1/3">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"
                        onClick={handleClick}
                    >
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                MaintenancePro
                            </p>
                            <p className='text-xs text-left sm:text-base text-gray-600 w-auto inline-block border-b-2'>
                                A fully deployed MERN stack app created from scratch to serve to a real client for testing purpose. MaintenancePro is aComputerized Maintenance Management System that assist property managers to handle their operations in effi cient manner.
                                Backend: MongoDb, NodeJs, Express, Heroku, JavaScript, TypeScript
                                Frontend: ReactJS, Auth0, Mailgun, Recharts, Bulma , CircleCI, Netlify
                                Testing: Jest, Storybook, Cypress
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-2">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-xl sm:text-2xl text-gray-900 '>
                                Ujay Sidhpura
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-2">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-xl sm:text-2xl text-gray-900 '>
                                Ujay Sidhpura
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-2">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-xl sm:text-2xl text-gray-900 '>
                                Ujay Sidhpura
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-2">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-xl sm:text-2xl text-gray-900 '>
                                Ujay Sidhpura
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-2">
                    <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 ">
                        <div className="">
                            <img src={myPicture} alt="profile"
                                className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-xl sm:text-2xl text-gray-900 '>
                                Ujay Sidhpura
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 p-4 w-auto inline-block border-b-2'>
                                Full-Stack Developer
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}