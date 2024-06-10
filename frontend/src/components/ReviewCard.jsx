
const ReviewCard = ({logo, stars, review, author, pic}) => {
    return (
        <div className="w-full flex flex-row flex-wrap bg-black justify-center md:justify-evenly items-center p-28 text-xs md:text-md">
            <div className="flex flex-col justify-evenly space-y-5 mb-8 md:mb-0">
                <div className="flex flex-row space-x-5">
                    <img className="w-8 object-contain" src={logo} />
                    <img className="w-32 object-contian" src={stars} />
                </div>
                <p className="text-white w-96 md:w-[680px]">"{review}"</p>
                <p className="text-white text-right mr-8">- {author}</p>
            </div>
            <img src={pic} className="w-96 object-cover rounded-lg" />
        </div>
    )
}

export default ReviewCard