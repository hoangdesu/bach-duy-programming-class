import React from "react";

const Footer = () => {
    console.log('Footer renders');
    
    return (
        <div>
            Copyrights: Brian @ RoPhim phake
        </div>
    )
}
// - memoizing: caches the rendered result and only re-renders the component if its props have changed. 

export default React.memo(Footer);
