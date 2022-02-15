import React, {Component} from 'react';

import classes from './User.module.css';

class User extends Component {
    //  https://robertmarshall.dev/blog/componentwillunmount-functional-components-react/
    //  equivalent to useEffect(()=>{ return () => {}},[]);
    //  the return function is executed at unmount
    componentWillUnmount() {
        console.info("user will unmount");
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
