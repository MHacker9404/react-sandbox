import styles from './app.module.scss';
import { Todos, Todo } from '@react-sandbox/todoslib';

const items: Todo[] = [
    { id: Math.random.toString(), text: 'Learn React' },
    { id: Math.random.toString(), text: 'Learn Typescript' },
];

export function App() {
    return <Todos items={items}></Todos>;
}

export default App;
