import { observable, action } from 'mobx';

class HomeStore {
    static namespace = 'homeStore';
    @observable value = 12;

    @action add() {
        this.value += 1;
    }
}

export default {
    [HomeStore.namespace]: new HomeStore(),
};
