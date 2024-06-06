import tripadvisor from '../assets/tripadvisor.png'
import instagram from '../assets/insta.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYelp,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";

const NumberStyle = {
    'color': '#D90606'
}

const Bottom = () => {
    return (
        <div className="flex flex-row h-40 bg-black text-white justify-evenly items-center">
            <div className='flex flex-row space-x-5 text-xs'>
                <div className='text-right'> 
                    <p className="">Mon - Fri</p>
                    <p className="">Sat</p>
                    <p className="">Sun</p>
                </div>
                <div className='text-left'> 
                    <p className="">11:00AM to 6:00PM</p>
                    <p className="">11:00AM to 4:00PM</p>
                    <p className="">Closed</p>
                </div>
            </div>
            <div className='text-xs text-center'>
                <p style={NumberStyle}>+1 617-232-7070</p>
                <p>1 Centre Street, Brookline, MA 02446</p>
            </div>
            <div className='flex flex-row space-x-8'>
                {/* <FontAwesomeIcon icon={faInstagram} size="xl" /> */}
                <img className='w-6 h-6 cursor-pointer' src={instagram} />
                <FontAwesomeIcon className='cursor-pointer' icon={faYelp} size="xl" />
                <FontAwesomeIcon className='cursor-pointer' icon={faGoogle} size="xl" />
                <img className='w-9 h-6 cursor-pointer' src={tripadvisor} />
            </div>
        </div>
    )
}

export default Bottom