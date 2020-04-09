import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AppState } from '../utils/Types';

const stateContext = React.createContext([null, () => {}] as AppState); // Create a context object

export {
    stateContext, // Export it so it can be used by other Components
};
