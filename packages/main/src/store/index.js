import GlobalStore from './globalStore';

export default {
    [GlobalStore.namespace]: new GlobalStore(),
};
