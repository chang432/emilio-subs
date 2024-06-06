
const Location = () => {
    return (
        <div className="flex flex-col items-center">
            <p>Location</p>
            <p className="pb-4">1 Centre Street, Brookline, MA 02446</p>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                    className="gmap_iframe"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=250&amp;hl=en&amp;q=1 Centre Street, Brookline, MA 02446&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                    <a href="https://embed-googlemap.com">google map embed html</a>
                </div>
                <style>{`.mapouter{position:relative;text-align:right;width:500px;height:200px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:200px;}.gmap_iframe{height:200px!important;}`}</style>
            </div>
        </div>
    )
}

export default Location;