import { observable, action } from 'mobx';

export default class GlobalStore {
    static namespace = 'globalStore';
    @observable selectedApp = '广发知识图谱';
    @observable showApp = true;

    @action changeApp(selectedApp) {
        this.selectedApp = selectedApp;
    }

    @action showSelectApp() {
        this.showApp = true;
    }

    @action hideSelectApp() {
        this.showApp = false;
    }
}
