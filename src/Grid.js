import React from 'react';
import Square from './Square';

const row = 4;
const column = 4;

const total = new Array(row*column).fill()

function Grid(props) {
    return (
        <div style={{ display:'flex', 
                      flexDirection: 'row',
                      margin: '10px',
                      flexWrap: 'wrap',
                      width: '100px'
                      }}>
            {total.map((i, e) => (
                <Square key={e.toString()} value={e} />
            ))}
        </div>
    );
}

export default Grid;