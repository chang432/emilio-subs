import Location from './Location'

const NumberStyle = {
    'color': '#D90606'
}

const NumberLocation = ({setShowHome, setShowMenu}) => {

    function displayMenu() {
        setShowHome(false)
        setShowMenu(true)
        window.scrollTo(0, 0)
    }

    return (
        <div className="w-full h-96 flex flex-wrap flex-row items-center justify-center md:justify-evenly mb-8 md:mb-0">
            <div className="flex flex-col space-y-4 md:space-y-8 md:w-[500px] md:h-[200px] items-center justify-center">
                <div className="flex flex-row space-x-2 text-xs md:text-lg">
                    <p>Order Now:</p>
                    <p style={NumberStyle}>+1 617-232-7070</p>
                </div>
                <button className="btn-sm md:btn-lg bg-black text-white md:w-2/3 text-xs md:text-md" onClick={displayMenu}>
                    See Menu
                </button>
            </div>
            <div className="w-0.5 h-32 bg-gray-400 invisible md:visible"></div>
            <Location />
        </div>
    )
}

export default NumberLocation