import React from 'react';
import { Provider, inject, observer } from 'mobx-react';

export function splitComponent(Comp, stores = {}) {
    const LazyComp = React.lazy(() => Comp);
    return (props) => (
        <Provider {...stores}>
            <LazyComp {...props} />
        </Provider>
    );
}

export function injectStore(Comp) {
    return inject((stores) => stores)(observer(Comp));
}
