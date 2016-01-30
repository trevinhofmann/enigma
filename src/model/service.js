const TITLE = Symbol();
const PASSWORD = Symbol();

export default class Service {

    constructor(data) {
        this.title = data.title;
        this.password = data.password;
    }

    get title() {
        return this[TITLE];
    }

    set title(title) {
        this[TITLE] = title;
    }

    get password() {
        return this[PASSWORD];
    }

    set password(password) {
        this[PASSWORD] = password;
    }

}
