import Card from '../UI/Card';

import styles from './UsersList.module.scss';

const UsersList = (props) => {
    console.info(props);

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
