import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../pages/Login";
import {PublicRoute} from "../component/PublicRoute";
import {App} from "../pages/App/App";
import { Register } from "../pages/Login/Register";

export const MainRoutes = (props) => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to={"/app/admin"} />
            </Route>
            <PublicRoute restricted={true} component={Login} path="/login" exact />
            <PublicRoute restricted={true} component={Register} path="/register" exact />
            <PublicRoute component={App} path="/app" />
        </Switch>
    );
};
