import { ColorRing } from "react-loader-spinner"


function Loader() {
    return (
        <div>
            <ColorRing 
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={[]}
            />
        </div>
    )
}

export default Loader