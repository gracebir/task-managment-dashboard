/** @format */

import React from "react";

const TodoTile: React.FC<Todo> = ({ id, todo, completed, userId }) => {
    return (
        <div className='shadow-md bg-white dark:bg-secondary rounded-md'>
            <div>
                {completed ? <span></span> : <span></span>}

                <button></button>
            </div>
            <div>
                <h3>{todo}</h3>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default TodoTile;
