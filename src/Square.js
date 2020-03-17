import React from 'react';

const onClick = (a,b) => {
    console.log(a,b)
}

function Square(props) {
    const column = props.column;
    const row = props.row;
    return (
        <div row={row} 
                onClick={() => onClick(column, row)} 
                style={{margin:'15px 30px'}}>
            *
        </div>
    );
}

export default Square;