import React from 'react';

const ErrorComponent = (props) => {
    return(
        <div className={props.errorMessage ? 'error':'invisible'}>{props.errorMessage}</div>
        // <div id='warning'>{props.errorMessage}</div>
    )
}

export default ErrorComponent;