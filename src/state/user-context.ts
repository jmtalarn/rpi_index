import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AppState } from '../utils/Types';

const userContext = React.createContext({ user: null } as AppState); // Create a context object

export {
    userContext, // Export it so it can be used by other Components
};
