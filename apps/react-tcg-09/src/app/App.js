import { useState } from 'react';
import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UsersList';

export function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        console.info(user);

        setUsers(prevState => [...prevState, { ...user, id: Math.random().toString() }]);
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
}
export default App;
