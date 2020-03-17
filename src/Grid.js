import React, { useState, useContext, createContext } from 'react';
import Square from './Square';

// const row = 4;
// const column = 4;

const matrix = () => {const rep = {}; 
                            for (let i = 0; i < 4; i++){
                                for (let j = 0; j < 4; j++){
                                    rep[`${i},${j}`] = false
                                }
                            }
                            return rep;
                            };


export const MatrixContext = createContext();

console.log(MatrixContext)

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
        <MatrixContext.Provider value={matrix()}>
            <div style={{ display:'flex', 
                        flexDirection: 'column',
                        margin: '10px',
                        }}>
                {generate}
            </div>
        </MatrixContext.Provider>
    );
}

export default Grid;