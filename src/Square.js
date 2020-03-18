import React, { useContext } from 'react';
import { MatrixContextConsumer } from './MatrixContextProvider';


function Square(props) {
    // const matrix = useContext(MatrixContextConsumer);
    const column = props.column;
    const row = props.row;

    const onClick = (b) => {
        console.log(b)
    }
    

    return (
        <MatrixContextConsumer>
            { (m) => (
                    <div row={row} 
                            onClick={() => onClick()} 
                            style={{margin:'15px 30px'}}>
                        { m[`${column},${row}`] === false ? "*" : "t" }
                    </div>
            )}
        </MatrixContextConsumer>
    );
}

export default Square;