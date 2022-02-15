import { Component, Fragment, useState, useEffect } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import Users from './Users';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        };
    }

    //  https://robertmarshall.dev/blog/componentwillunmount-functional-components-react/
    //  useEffect(()=>{},[])
    componentDidMount() {
        //  mimic http call to back-end API to load users
        // this.setState({ filteredUsers: [...DUMMY_USERS] });
        this.setState({ filteredUsers: [...this.context.users] });
    }

    //  https://robertmarshall.dev/blog/componentwillunmount-functional-components-react/
    //  useEffect(()=>{},[some_dependency])
    //  replaces the useEffect in the functional component
    componentDidUpdate(prevProps, prevState) {
        //  checking to see if the searchTerm is the state that updated....
        //  so no infinite loop on the filteredUsers getting updated
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.info(this.state.searchTerm);
            this.setState({
                // filteredUsers: DUMMY_USERS.filter((user) =>
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event) {
        console.info(event.target.value);
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <>
                <div className={classes.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </>
        );
    }
    //  an option for context
    // render() {
    //     return (
    //         <UsersContext.Consumer>
    //             <div className={classes.finder}>
    //                 <input
    //                     type="search"
    //                     onChange={this.searchChangeHandler.bind(this)}
    //                 />
    //             </div>
    //             <Users users={this.state.filteredUsers} />
    //         </UsersContext.Consumer>
    //     );
    // }
}
/*
const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className={classes.finder}>
                <input type="search" onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};
*/
export default UserFinder;
