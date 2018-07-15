import React from 'react';

import auth from './auth';

export const state = {
    // ...auth
    thing: 'yes'
}

const Context = React.createContext(state);

export default Context;