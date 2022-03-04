import {AnimatedSwitch} from "react-router-transition";
import {Redirect, Route, Switch} from "react-router-dom";
import {PublicRoute} from "../component/PublicRoute";
import {Login} from "../pages/Login/Login";
import {App} from "../pages/App/App";
import {Index} from "../pages/admin/Index";
import {Revenue} from "../pages/revenue/Index";

export const AppRoute = () => {
    return <Switch>
        <Route path={"/app/admin"}>
            <Index/>
        </Route>
        <Route path={"/app/revenue"}>
            <Revenue/>
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/home'} />
        </Route>
    </Switch>
}
