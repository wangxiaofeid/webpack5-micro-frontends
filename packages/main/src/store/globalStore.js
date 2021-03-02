import { observable, action } from 'mobx';

export default class GlobalStore {
    static namespace = 'globalStore';
    @observable selectedApp = 'guangfa';

    @action changeApp(selectedApp) {
        this.selectedApp = selectedApp;
    }
}
