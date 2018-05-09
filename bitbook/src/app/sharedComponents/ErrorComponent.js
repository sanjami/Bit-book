import React from 'react';

const ErrorComponent = (props) => {
    return(
        <div className={props.errorMessage > 0 ? 'error':'invisible'}>
        <div className='errMsg'>
       
       <p> An error has occurred:</p>
        {props.errorMessage}</div>
        </div>
    )
}

export default ErrorComponent;