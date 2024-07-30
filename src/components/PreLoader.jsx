import React from "react";
function PreLoader() {
    return (
        <>
            <div id="preloader">
                <div className="lds-ripple">
                    <div />
                    <div />
                </div>
            </div>
        </>
    )
}
export default PreLoader;