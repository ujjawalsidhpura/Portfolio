import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

export default function About() {
    return (
        <div className="flex flex-col justify-center max-w-ms mx-auto my-10 bg-white shadow-xl rounded-xl p-5 ">

            <div className="max-mx-2xl mt-5 mx-auto ">

                <p className="text-xl sm:text-base text-gray-700 ">
                    I am a Civil Engineer turned into a Developer to reinvent my career. I have worked over 5 years as Facility Manager of a Marriottbrand hotel and handled few major projects, including $1 million+ renovation and integrating an Asset Management Software intoSOP of engineering department. From my experience as FM and understanding needs of a FM, I created MaintenancePro app whichaims at small budget properties who wants to shift to such softwares but wants it to be less complex, intuitive and aff ordable.
                    <br>
                    </br>
                    <br>
                    </br>
                    My hobbies includes long distance running, biking, sauna, watching Sitcoms, camping and exploring various coffee joints. Yes!, I am coffeeholic!
                </p>

                {/* <ScrollIntoView selector=''>
                    <div className='mx-auto py-5 '>
                        <FaChevronDown className='animate-bounce mx-auto text-3xl text-gray-800' />
                    </div>
                </ScrollIntoView> */}

            </div>
        </div>
    )
}