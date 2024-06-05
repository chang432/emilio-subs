import NumberLocation from './NumberLocation'
import Carousel from './Carousel'

import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'

const images = [p1,p2,p3,p4,p5,p6,p7,p8];
const image_labels = ["label1", "label2", "label3", "label4", "label5", "label6", "label7", "label8"];

const HomePage = () => {
    return(
        <div>
            <div className='w-full h-16 bg-black'></div>
            <NumberLocation />
            <Carousel images={images} labels={image_labels}/>
            <div className='h-20 bg-white'></div>
        </div>
    )
}

export default HomePage