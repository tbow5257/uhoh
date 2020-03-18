import React, { useState, useContext, createContext } from 'react';
import Square from './Square';
import { MatrixContextProvider } from './MatrixContextProvider';

// const row = 4;
// const column = 4;


function MakeRow(props) {
    // const [matrix, setMatrix] = useState(initialState());

    // const tester = setMatrix({...matrix, "3,3": true})

    //hehe={matrix[`${e},${props.row}`]}

    const column = Array(4).fill().map((i, e) => 
                        <Square key={e} 
                                column={e}
                                row={props.row} />
                     )

    return (
        <div
            style={{ display:'flex', 
                    flexDirection: 'row',
                    }}>
            {column}
        </div>
    );
} 


const generate = Array(4).fill().map((i,e) => 
                    <MakeRow key={e} row={e} /> )




function Grid() {

    return (
        <MatrixContextProvider>
            <div style={{ display:'flex', 
                        flexDirection: 'column',
                        margin: '10px',
                        }}>
                {generate}
            </div>
        </MatrixContextProvider>
    );
}

export default Grid;