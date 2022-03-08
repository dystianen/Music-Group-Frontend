import {Redirect, Route, Switch} from "react-router-dom";
import {Admin} from "../pages/Admin";

export const AppRoute = () => {
    return <Switch>
        <Route path={"/app/admin"}>
            <Admin/>
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/admin'}/>
        </Route>
    </Switch>
}
