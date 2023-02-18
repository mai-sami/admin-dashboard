import { Redirect, Route } from "react-router-dom";
 
const GuardedRoute = ({ component: Component, auth, ...rest }) => (
     auth === true ?
        <Route {...rest} render={(props) => (
            <Component {...props} />
        )} />
        : <Redirect to='/login' />
)

export default GuardedRoute;

