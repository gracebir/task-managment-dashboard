/** @format */

import TodoTile from "./TodoTile";

const Todos: React.FC<{ todos: Array<Todo> }> = ({ todos }) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {todos.map((todo) => (
                <TodoTile key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default Todos;
