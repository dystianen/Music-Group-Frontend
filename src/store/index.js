import {observable, computed} from "mobx";
import {UI} from "./ui";
import {Authentication} from "./Authentication";
import {Admin} from "./Admin";

export class Store {
    @observable
    accessToken = '';

    @observable
    refreshToken = '';

    ui = new UI();
    authentication = new Authentication(this);
    admin = new Admin(this);

    @computed
    get isLoggedIn() {
        return !!this.refreshToken;
    }

    setInitialToken(accessToken, refreshToken) {
        this.setToken(accessToken, refreshToken);
    }

    setToken(accessToken, refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
