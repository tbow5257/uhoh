import React from 'react';

const onClick = (e) => {
    console.log(e)
}

function Square(props) {
    const key = props.value
    return (
        <div onClick={() => onClick(key)} style={{margin:'5px'}}>
            *
        </div>
    );
}

export default Square;