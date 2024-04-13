import React from 'react'
import './Fields.css'

function Fields() {
    const rows = 9;
    const cols = 8;

    // Create an array to hold the grid cells
    const grid = [];

    // Generate the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Generate a unique key for each grid cell
            //const cellKey = `${i}-${j}`;
            // Push the cell JSX into the grid array
            grid.push(<div className="cell"></div>);
        }
    }

    return (
        <div className="field">
            {grid}
        </div>
    );
}

export default Fields;