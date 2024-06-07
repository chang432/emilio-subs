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
        <div className="w-full h-96 flex flex-row items-center justify-evenly">
            <div className="flex flex-col space-y-8 w-[500px] h-[200px] items-center justify-center">
                <div className="flex flex-row space-x-2">
                    <p>Order Now:</p>
                    <p style={NumberStyle}>+1 617-232-7070</p>
                </div>
                <button className="btn-lg bg-black text-white w-2/3" onClick={displayMenu}>
                    See Menu
                </button>
            </div>
            <div className="w-0.5 h-32 bg-gray-400"></div>
            <Location />
        </div>
    )
}

export default NumberLocation