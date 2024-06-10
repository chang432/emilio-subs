import tripadvisor from '../assets/tripadvisor.png'
import instagram from '../assets/insta.png'
import yelp from '../assets/yelp.png'
import google from '../assets/google.png'
import styled from 'styled-components';
const NumberStyle = {
    'color': '#D90606'
}

const Bottom = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap h-32 md:h-40 bg-black text-white justify-center md:justify-evenly items-center text-xs md:text-sm">
            <div className='hidden md:flex flex-row space-x-5'>
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
            <div className='text-center mb-6 md:mb-0'>
                <p style={NumberStyle}>+1 617-232-7070</p>
                <p>1 Centre Street, Brookline, MA 02446</p>
            </div>
            <div className='flex flex-row space-x-8'>
                <img className='w-4 h-4 md:w-6 md:h-6 cursor-pointer' src={instagram} />
                <img className='w-4 h-4 md:w-6 md:h-6 cursor-pointer' src={yelp} />
                <img className='w-4 h-4 md:w-6 md:h-6 cursor-pointer' src={google} />
                <img className='w-6 h-4 md:w-9 md:h-6 cursor-pointer' src={tripadvisor} />
            </div>
        </div>
    )
}

export default Bottom