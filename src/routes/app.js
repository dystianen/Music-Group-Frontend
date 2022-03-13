import {Redirect, Route, Switch} from "react-router-dom";
import {Admin} from "../pages/Admin";
import {DetailAdmin} from "../pages/Admin/Detail";
import {observer} from "mobx-react-lite";
import { Register } from "../pages/Login/Register";

export const AppRoute = observer(() => {
    return <Switch>
        <Route path={"/app/admin"}>
            <Admin/>
        </Route>
        <Route path="/app/detail/:id">
            <DetailAdmin />
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/admin'}/>
        </Route>
    </Switch>
});