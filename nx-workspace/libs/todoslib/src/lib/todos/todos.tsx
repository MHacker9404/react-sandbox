import './todos.module.scss';
import { Todo } from '../models/todo';

export interface TodosProps {
    items: Todo[];
}

export const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};
