import React from 'react'

function Alert(props) {
    // props.alert && -- if(props.alert==false/null){toh aage nhi chalega} else{chalega}
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert