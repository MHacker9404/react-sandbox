import './todos.module.scss';
import { TodoModel } from '../models/TodoModel';
import TodoItem from './TodoItem';

export interface TodosProps {
    items: TodoModel[];
}

export const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};
