import myPicture from '../images/myPicture.jpeg'

export default function Projects() {

    return (

        <div className="max-w-8xl mx-auto justify-center py-6" id='tech'>
            <p className="text-base sm:text-2xl text-gray-900 pt-4  text-center">
                Projects
            </p>

            <div className='flex flex-wrap justify-center pt-2'>

                <a href="https://github.com/ujjawalsidhpura/MaintenancePro" target='_blank'>
                    <div className="w-80 m-2 ">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"
                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    MaintenancePro
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    A fully deployed MERN stack app created from scratch to serve to a real client for testing purpose. MaintenancePro is aComputerized Maintenance Management System that assist property managers to handle their operations in effi cient manner.
                                    <br></br>
                                    <br></br>
                                    Backend: MongoDb, NodeJs, Express, Heroku, JavaScript, TypeScript <br />
                                    Frontend: ReactJS, Auth0, Mailgun, Recharts, Bulma , CircleCI, Netlify <br />
                                    Testing: Jest, Storybook, Cypress
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/ujjawalsidhpura/Bubbles-A-food-ordering-app" target='_blank'>
                    <div className="w-80 m-2">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"

                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    Bubbles
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    Bubbles is a fancy looking bubble tea ordering app for a fi ctitious joint. User can place an order and receive SMS confi rmation ofthe order. App owner also get a SMS notifi cation regarding order details. App uses database schema created by us and is a full stackapplication.
                                    <br></br>
                                    <br></br>
                                    NodeJS, Express, jQuery, CSS, Bulma (CSS framework), Twilio (SMS API), PostgreSQL, Version Control and working in multiplebranches
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/ujjawalsidhpura/scheduler" target="_blank" >
                    <div className="w-80 m-2">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"

                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    Scheduler
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    A fully deployed PERN stack app that handles appointments. Created using Test Driven Development TDD Model, it leverages different testing libraries to ensure app integrity.
                                    <br />
                                    <br />
                                    Frontend: ReactJS, BootStrap, SCSS, Heroku, CircleCI, Netlify
                                    <br />                                            Testing: Jest (ESLint), Storybook(Unit), Cypress (E2E)
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/ujjawalsidhpura/SpaceShooters" target='_blank'>
                    <div className="w-80 m-2">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"

                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    SpaceShooter
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    A space invader shooting game created using Python to demonstrate basic understanding of Python and learning ability to adaptnew languages quickly.
                                    <br />
                                    <br />
                                    Python, Pygame
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/ujjawalsidhpura/ChatBot" target="_blank" >
                    <div className="w-80 m-2">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"
                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    ChatBot
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    An automated ChatBot that leverages tflearn to implement basic machine learning and add vocabulary to JSON database. It takes in user input and filters through existing data to give most relevant response. Respond with premediated message if it cannot comprehend user command. Connect this model with Discord chatbot.

                                    <br />
                                    <br />
                                    Python, tflearn, machine learning , data-modelling, Discord automated chat
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/ujjawalsidhpura/jungle-rails" target='_blank'>
                    <div className="w-80 m-2">
                        <div className="flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 hover:bg-gray-300 hover:ring-gray-300 hover:transition-colors duration-300 ease-in-out"
                        >
                            <div className="">
                                <img src={myPicture} alt="profile"
                                    className="w-64 mx-auto shadow-xl rounded-xl drop-shadow-sm" />
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text-base my-2 sm:text-xl text-gray-900 '>
                                    Jungle Rails
                                </p>
                                <p className='text-xs text-left sm:text-xs text-gray-600 w-auto inline-block border-b-2 h-48'>
                                    A mini e-commerce application built with Ruby on Rails 4.2 to learn basics of working with Ruby and Rails and tested using RSpec.
                                    <br></br>
                                    <br></br>
                                    Ruby on Rails, Stripe, PostgreSQL, RSpec.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>


            </div>
        </div>

    )
}