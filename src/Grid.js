import React from 'react';
import Square from './Square';

// const row = 4;
// const column = 4;

function MakeRow(props) {
    const column = Array(4).fill().map((i, e) => 
                    <Square key={e} 
                            column={e} 
                            row={props.row} /> )

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



function Grid(props) {
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