import React from "react";

function Button ({message, className, onClick}) {
    return <button className={className} onClick={onClick}>
        {message}
    </button>
}

export default Button