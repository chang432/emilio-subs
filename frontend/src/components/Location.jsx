
const Location = () => {
    return (
        <div className="flex flex-col items-center text-xs md:text-lg mx-2 md:mx-0">
            <p>Location</p>
            <p className="pb-4">6 Bigelow Ave, Watertown, MA 02472</p>
            <div className="hidden md:block mapouter1">
                <div className="gmap_canvas">
                    <iframe
                    className="gmap_iframe"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=250&amp;hl=en&amp;q=6 Bigelow Ave, Watertown, MA 02472&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                    <a href="https://embed-googlemap.com">google map embed html</a>
                </div>
                <style>{`.mapouter1{position:relative;text-align:right;width:500px;height:200px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:200px;}.gmap_iframe{height:200px!important;}`}</style>
            </div>
            <div className="block md:hidden mapouter2">
                <div className="gmap_canvas">
                    <iframe
                    className="gmap_iframe"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=250&amp;hl=en&amp;q=6 Bigelow Ave, Watertown, MA 02472&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                    <a href="https://embed-googlemap.com">google map embed html</a>
                </div>
                <style>{`.mapouter2{position:relative;text-align:right;width:400px;height:200px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:200px;}.gmap_iframe{height:200px!important;}`}</style>
            </div>
        </div>
    )
}

export default Location;