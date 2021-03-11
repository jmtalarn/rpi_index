import React from 'react';
// eslint-disable-next-line no-unused-vars

const stateContext = React.createContext([null, () => {}]); // Create a context object

export {
    stateContext, // Export it so it can be used by other Components
};
