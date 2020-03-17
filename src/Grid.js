import React, { useState } from 'react';
import Square from './Square';

// const row = 4;
// const column = 4;

const initialState = () => {const rep = {}; 
                            for (let i = 0; i < 4; i++){
                                for (let j = 0; j < 4; j++){
                                    rep[`${i},${j}`] = false
                                }
                            }
                            return rep;
                            };


function MakeRow(props) {
    const [matrix, setMatrix] = useState(initialState());

    // const tester = setMatrix({...matrix, "3,3": true})

    const column = Array(4).fill().map((i, e) => 
                    <Square key={e} 
                            column={e}
                            row={props.row}
                            hehe={matrix[`${e},${props.row}`]} /> )

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
        <div style={{ display:'flex', 
                      flexDirection: 'column',
                      margin: '10px',
                      }}>
            {generate}
        </div>
    );
}


export default Grid;