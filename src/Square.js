import React, { useContext } from 'react';
import { MatrixContext } from './Grid';


function Square(props) {
    const matrix = useContext(MatrixContext);
    const column = props.column;
    const row = props.row;

    const onClick = (b) => {
        console.log(matrix)
    }
    

    return (
        <MatrixContext.Consumer>
            { (m) => (
                            <div row={row} 
                            onClick={() => onClick()} 
                            style={{margin:'15px 30px'}}>
                        { m[`${column},${row}`] === false ? "*" : "t" }
                    </div>
            )}
        </MatrixContext.Consumer>
    );
}

export default Square;